import { CHANGE_INPUT } from "./reducer/types";

export function changeInput(id) {
  return {
    type: CHANGE_INPUT,
    payload: id,
  };
}

