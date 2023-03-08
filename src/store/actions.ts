import { Action } from "../types/types";

export const addToTask = (text: string, listId: string): Action => ({
  type: "ADD_TASK",
  payload: {
    text,
    listId,
  },
});

export const addToList = (text: string): Action => ({
  type: "ADD_LIST",
  payload: text,
});
