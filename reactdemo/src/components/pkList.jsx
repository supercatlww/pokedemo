import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PkList = (props) => {
  const { total_list } = props;
  const pageSize = 48;
  const [pageIndex, setPageIndex] = useState(0);
  const [pageTotal, setPageTotal] = useState(0);
  const [pageList, setPageList] = useState([]);
  const [count, setCount] = useState(0);
  const loadedRef = useRef(0);
  const refreshList = async () => {
    setPageList([]);
    loadedRef.current = 0;
    let tmplist = [];
    for (let i = 0; i < total_list.length; i++) {
      if (i >= pageIndex * pageSize && i < pageSize * (pageIndex + 1)) {
        //let { name, sprites } = await this.$parent.fetchListItems(total_list[i].name, total_list[i].url)
        tmplist.push({ name: total_list[i].name, imgUrl: "" });
        props
          .fetchListItems(total_list[i].name, total_list[i].url)
          .then(({ name, sprites }) => {
            let item = tmplist.filter((item) => {
              return item.name == total_list[i].name;
            });
            item[0].imgUrl = sprites.other["official-artwork"].front_default;
            //console.log(tmplist);
            loadedRef.current = loadedRef.current + 1;
            if (loadedRef.current == tmplist.length) {
              setPageList(tmplist);
            }
          });
      }
    }
  };
  const toPrev = () => {
    if (pageIndex == 0) return;
    setPageIndex(pageIndex - 1);
  };
  const toNext = () => {
    if (pageIndex == pageTotal - 1) return;
    setPageIndex(pageIndex + 1);
  };
  useEffect(() => {
    setCount(total_list.length);
    setPageTotal(Math.ceil(count / pageSize) || 1);
  });
  useEffect(() => {
    setPageIndex(0);
    refreshList();
  }, [count]);
  useEffect(() => {
    refreshList();
  }, [pageIndex]);
  //   useEffect(() => {}, [pageList]);

  return (
    <div>
      <div className="count-bar">{count} results found.</div>
      <Container fluid>
        <Row>
          {pageList.map((item, index) => {
            return (
              <Col xs={4} sm={3} md={2} key={index}>
                <div className="img">
                  <img src={item.imgUrl} />
                </div>
                <div>{item.name}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
      <div className="btn-wrapper">
        <Button
          type="primary"
          disabled={pageIndex == 0}
          onClick={() => {
            toPrev();
          }}
        >
          Prev
        </Button>
        <Button
          type="primary"
          disabled={pageIndex == pageTotal - 1}
          onClick={() => {
            toNext();
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default PkList;
