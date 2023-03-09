import { Action, AppState, Item } from "../types/types";
import { nanoid } from "nanoid";

const findItemIndxById = <TItem extends Item>(items: TItem[], id: string) => {
  return items.findIndex((item: TItem) => item.id === id);
};

const removeItemAtIndex = <TItem>(array: TItem[], index: number) => {
  return [...array.slice(0, index), ...array.slice(index + 1)];
};

const insertItemAtIndex = <TItem>(
  array: TItem[],
  item: TItem,
  index: number
) => {
  return [...array.slice(0, index), item, ...array.slice(index)];
};

const moveItem = <TItem>(array: TItem[], from: number, to: number) => {
  const item = array[from];
  return insertItemAtIndex(removeItemAtIndex(array, from), item, to);
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
      break;
    }
    case "MOVE_LIST": {
      const { draggedId, hoverId } = action.payload;
      const dragIndex = findItemIndxById(draft.lists, draggedId);
      const hoverIndex = findItemIndxById(draft.lists, hoverId);
      draft.lists = moveItem(draft.lists, dragIndex, hoverIndex);
      break;
    }
    case "SET_DRAGGED_ITEM": {
      draft.draggedItem = action.payload;
      break;
    }
  }
};
