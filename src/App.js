
import React, { useState, useEffect } from "react";
import "./App.css";
import InfiniteScroll from "react-infinite-scroll-component";
import Movie from "./Movie";
export default function Movies() {
  const [items, setItems] = useState([]);
  const [myItems, setMyItems] = useState([]);
  const [myIndex, setMyIndex] = useState(null);
  const [search, setSearch] = useState("");

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
  function searchMovie(e) {
    const test = myItems?.filter((item) => {
      return item.original_title
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setItems(test);
    setSearch(e.target.value);
  }
  function sort(e) {
    if (e.target.value == 1) {
      const newItems = items
        .sort((a, b) => {
          if (a.original_title < b.original_title) {
            return -1;
          }
          if (a.original_title > b.original_title) {
            return 1;
          }
          return 0;
        })
        .slice();
      setItems(newItems);
    }
    if (e.target.value == 2) {
      const newItems = items
        .sort((a, b) => {
          if (a.release_date < b.release_date) {
            return -1;
          }
          if (a.release_date > b.release_date) {
            return 1;
          }
          return 0;
        })
        .slice();
      setItems(newItems);
    }

    console.log("sort", e.target.value);
  }

  return (
    <div className="body">
      <InfiniteScroll
        // className="body"
        dataLength={items.length}
        next={() => {
          console.log("next");
          setNum(num + 1);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        {/* <div> */}
        <div className="header">
          {" "}
          <h1>TMDB</h1>
          {/* <Login/> */}
          <div>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                searchMovie(e);
              }}
            />{" "}
            <select
              className="select"
              style={{ backgroundColor: "red", width: "200px" }}
              onClick={(e) => {
                sort(e);
              }}
            >
              <option value="0">no sort </option>
              <option value="1">sort name </option>
              <option value="2">sort date </option>
            </select>
          </div>
        </div>
        {items?.map((item, index) => (
          <Movie
            key={item.id}
            item={item}
            items={items}
            setItems={setItems}
            index={index}
            remove={() => {
              remove(item.id);
            }}
            setMyIndex={setMyIndex}
            myIndex={myIndex}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}
