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

type Action = AddListAction | AddTaskAction | MoveList;

type Item = {
  id: string;
};
