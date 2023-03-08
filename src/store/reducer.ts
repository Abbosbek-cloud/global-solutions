import { Action, AppState, Item } from "../types/types";
import { nanoid } from "nanoid";

const findItemIndxById = <TItem extends Item>(items: TItem[], id: string) => {
  return items.findIndex((item: TItem) => item.id === id);
};

export const appStateReducer = (
  draft: AppState,
  action: Action
): AppState | void => {
  switch (action.type) {
    case "ADD_LIST": {
      draft.lists.push({
        id: nanoid(),
        text: action.payload,
        tasks: [],
      });
      break;
    }
    case "ADD_TASK": {
      const { text, listId } = action.payload;
      const listIndex = findItemIndxById(draft.lists, listId);

      draft.lists[listIndex].tasks.push({
        id: nanoid(),
        text,
      });
    }
  }
};
