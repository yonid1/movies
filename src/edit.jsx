// import React, { useState, useEffect } from "react";
// // import "./App.css";

// export default function Edit(props) {
//   const index = props.index;
//   // console.log("props", props.items.results[0].original_title);
//   // console.log("index2",index);


//   function openEdit(index) {
//     props.setShoeDiv(true);
//     props.setIndex(index);
//   }

//   function saveEdit() {
//     props.setShoeDiv(false);
//   }
//   return (
//     <div key={index}>
//       {props.shoeDiv ? (
//         <div className="edit">
//           <input type="text" id="name" />
//           <button onClick={saveEdit}>save</button>
//         </div>
//       ) : null}
//       <button onClick={() => openEdit(index)}>edit</button>
//     </div>
//   );
// }
