import React, { createContext } from "react";
import { AddNewItem } from "./components/AddItem";
import { Column } from "./components/Column";
import { AppContainer } from "./components/StyledComponents";
import { useAppState } from "./hooks/useAppState";
import { addToList } from "./store/actions";
import { AppStateProvider } from "./store/Provider";

function App() {
  const { lists, dispatch } = useAppState();
  console.log(lists);
  return (
    <React.StrictMode>
      <AppStateProvider>
        <AppContainer>
          {lists.map((list) => (
            <Column text={list.text} key={list.id} id={list.id} />
          ))}
          <AddNewItem
            btnText="+ Add another list"
            handleAdd={(text) => dispatch(addToList(text))}
          />
        </AppContainer>
      </AppStateProvider>
    </React.StrictMode>
  );
}

export default App;
