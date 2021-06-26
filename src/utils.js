import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";
import {nanoid} from "@reduxjs/toolkit";
import {ID_SIZE} from "./const";

dayjs.locale('ru');
dayjs.extend(relativeTime);

export const getHumanizeDate = (date) => {
  return dayjs(date).fromNow();
}

export const isEscEvent = (evt, cb) => {
  if (evt.key === `Escape`) {
    cb();
  }
}

export const getRatingList = (amount) => {
  return [...Array(amount)].map((_, i) => i + 1);
}

export const getID = () => {
  return nanoid(ID_SIZE);
}
