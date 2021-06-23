import {MAX_RATING} from "./const";

export const isEscEvent = (evt, cb) => {
  if (evt.key === `Escape`) {
    cb();
  }
}

export const getRatingList = (amount) => {
  return [...Array(amount)].map((_, i) => i + 1);
}
