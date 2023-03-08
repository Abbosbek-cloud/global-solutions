import { createContext, FC, FunctionComponent } from "react";
import { AppStore } from "../data/data";
import { List, Task } from "../types/types";

type AppStateContextProps = {
  lists: List[];
  getTasksByListId(id: string): Task[];
};

type Props = {
  children: React.ReactNode;
};

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider: FC<Props> = ({ children }) => {
  const { lists } = AppStore;

  const getTasksByListId = (id: string) => {
    return lists.find((list) => list.id == id)?.tasks || [];
  };

  return (
    <AppStateContext.Provider value={{ lists, getTasksByListId }}>
      {children}
    </AppStateContext.Provider>
  );
};
