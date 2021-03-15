import { CHANGE_INPUT } from "./reducer/types";

export function changeInput(id) {
  return {
    type: CHANGE_INPUT,
    payload: id,
  };
}
// export function increment(num) {
//   return {
//     type: INCREMENT,
//     payload: num,
//   };
// }
// export function decrement(num) {
//   return {
//     type: DECREMENT,
//     payload: num,
//   };
// }
// console.log("action",changeInput());

// export function changeInput(value) {
//   return { type: CHANGE_INPUT, payload: value };
// }
