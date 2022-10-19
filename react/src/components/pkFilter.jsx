import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const PkFilter = (props) => {
  const { list, filterlist } = props;
  //const [list, setList] = useState([]);
  //const [filterItems, setFilterItems] = useState([]);
  // useEffect(() => {
  //     debugger;
  //     setList(props.list)
  //     console.log(props.list, list)

  // }, [])

  const handlefilterlist = (index, requestUrl) => {
    list[index].selected = !list[index].selected;
    let filterItems = list.filter((item, index) => {
      return item.selected;
    });
    filterlist(filterItems);
  };

  return (
    <div className="filter-container">
      <div>Types:</div>
      <div>
        {list.map((item, index) => {
          return (
            <Button
              variant={item.selected ? "primary" : "light"}
              key={index}
              onClick={() => {
                handlefilterlist(index, item.url);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default PkFilter;
