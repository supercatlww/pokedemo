import React, { useState, useEffect } from "react";
import "./list.css";
import PkFilter from "../../components/pkFilter";
import PkList from "../../components/pkList";
import {
  getPokemonTypeList,
  getPokemonList,
  getPokemonItem,
  getPokemonListByType,
} from "../../api/request";

const List = () => {
  const limit = 1200;
  //let filterListData = [];
  const [filterListData, setFilterListData] = useState([]);
  const [listData, setListData] = useState([]);
  const [cacheItemData, setCacheItemData] = useState({});
  const [cacheListData, setCacheListData] = useState({});

  const fetchTypeList = async () => {
    let { results } = await getPokemonTypeList();

    setFilterListData(results);
    for (let i = 0; i < results.length; i++) {
      await fetchListByType(results[i]["url"]);
    }
  };
  const fetchList = async () => {
    let { results } = await getPokemonList({
      limit: limit,
    });
    //cache the default list
    setListData(results || []);
    let tmp = cacheListData;
    tmp.default = results;
    setCacheListData(tmp);
  };
  const fetchListByType = async (requestUrl) => {
    let { name, pokemon } = await getPokemonListByType(requestUrl);
    let results = pokemon.map((item, idx) => {
      return item.pokemon;
    });
    //cache the result list
    //cacheListData[name] = results;
    let tmp = cacheListData;
    tmp[name] = results;
    setCacheListData(tmp);
  };
  const fetchListItems = async (name, requestUrl) => {
    let temp_item;
    if (cacheItemData[name]) {
      //item in cache
      temp_item = cacheItemData[name];
    } else {
      //fetch data online
      temp_item = await getPokemonItem(requestUrl);
      let tmp = cacheItemData;
      tmp[name] = temp_item;
      setCacheItemData(tmp);
    }
    return temp_item;
  };
  const handlefilterlist = async (filterItems) => {
    if (!filterItems.length) {
      //no filter item , show default list
      setListData(cacheListData.default || []);
      return;
    }
    let temp_lists = [];
    for (let i = 0; i < filterItems.length; i++) {
      if (cacheListData[filterItems[i]["name"]]) {
        //list in cache
        temp_lists.push(cacheListData[filterItems[i]["name"]]);
      } else {
        // fetch data online
        let results = await fetchListByType(filterItems[i]["url"]);
        temp_lists.push(results);
      }
    }
    setListData(getInter(temp_lists) || []);
  };
  const getInter = (list) => {
    let intersection = list[0];
    list.forEach((item, index) => {
      if (index >= 1)
        intersection = [...item].filter((x) =>
          [...intersection].some((y) => y.name === x.name)
        );
    });
    return intersection;
  };

  useEffect(() => {
    fetchTypeList();
    fetchList();
  }, []);

  return (
    <div>
      <PkFilter list={filterListData} filterlist={handlefilterlist} />
      <PkList total_list={listData} fetchListItems={fetchListItems} />
    </div>
  );
};

export default List;
