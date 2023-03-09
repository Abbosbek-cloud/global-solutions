export type Task = {
  id: string;
  text: string;
};

export type List = {
  id: string;
  text: string;
  tasks: Task[];
};

export type AppState = {
  lists: List[];
  draggedItem: DragItem | null;
};

interface AddListAction {
  type: "ADD_LIST";
  payload: string;
}

interface AddTaskAction {
  type: "ADD_TASK";
  payload: { text: string; listId: string };
}

interface MoveList {
  type: "MOVE_LIST";
  payload: { draggedId: string; hoverId: string };
}

interface DragItemAction {
  type: "SET_DRAGGED_ITEM";
  payload: DragItem | null;
}

type Action = AddListAction | AddTaskAction | MoveList | DragItemAction;

type Item = {
  id: string;
};

type ColumnDragItem = {
  id: string;
  text: string;
  type: "COLUMN";
};

export type DragItem = ColumnDragItem;
