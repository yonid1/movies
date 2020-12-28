import React, { useState, useEffect } from "react";
import "./App.css"
export default function Movies() {
  const [items, setItems] = useState();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=41e0d7fc77f91f26e153e4bcaf87de0a"
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result.results);
        setItems(result);
      });
  }, []);
  console.log(items);
  return (
    <div>

      <div>{items?.results.map((item) =>(
        <div  className = "display" key = {item.id}> Title: {item.original_title} {<img src ={`https://image.tmdb.org/t/p/w200/${item.backdrop_path}`} />} 
        time: {item.release_date}
         </div>
        ) )}</div>
    </div>
  );
}

// function MyComponent() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [items, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {items.map(item => (
//           <li key={item.id}>
//             {item.name} {item.price}
//           </li>
//         ))}
//       </ul>
//     );
//   }
// }
// export default MyComponent
