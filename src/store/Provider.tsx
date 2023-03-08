import { createContext, FC, Dispatch } from "react";
import { useImmerReducer } from "use-immer";
import { appData } from "../data/data";
import { Action, List, Task } from "../types/types";
import { appStateReducer } from "./reducer";

type Props = {
  children: React.ReactNode;
};

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
  dispatch: Dispatch<Action>;
};

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useImmerReducer(appStateReducer, appData);

  const { lists } = state;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id == id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};
