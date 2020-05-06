import { INCREMENT, DECREMENT, RESET } from "../types";

/* Actions */
export function increaseCount() {
  return { type: INCREMENT };
}

export function decreaseCount() {
  return { type: DECREMENT };
}

export function resetCount() {
  return { type: RESET };
}
