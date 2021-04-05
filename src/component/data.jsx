import React, { useState, useEffect } from "react";

import Movie from "../Movie";
import InfiniteScroll from "react-infinite-scroll-component";
import Search from "./search";
import Sort from "../component/sort";

export default function Data() {
  const [items, setItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [num, setNum] = useState(1);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=41e0d7fc77f91f26e153e4bcaf87de0a&&page=${num}`
    )
      .then((res) => res.json())
      .then((result) => {
        setMyItems((prev) => [...prev, ...result.results]);
        setItems((prev) => [...prev, ...result.results]);
      });
  }, [num]);
  function remove(id) {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  }
  console.log("items", items);
  return (
    <InfiniteScroll
      dataLength={items.length}
      next={() => {
        setNum(num + 1);
      }}
      hasMore={true}
      loader={<h4>Loading...</h4>}
    >
      <Sort items={items} setItems={setItems} />
      <Search myItems={myItems} items={items} setItems={setItems} />

      {items?.map((item, index) => (
        <Movie
          key={item.id}
          item={item}
          // items={items}
          // setItems={setItems}
          index={index}
          remove={() => {
            remove(item.id);
          }}
        />
      ))}
    </InfiniteScroll>
  );
}
