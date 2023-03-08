import React from "react";
import { AddNewItem } from "./components/AddItem";
import { Column } from "./components/Column";
import {
  AppContainer,
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./components/StyledComponents";

function App() {
  return (
    <AppContainer>
      <Column text="To Do" />
      <Column text="In Progress" />
      <Column text="Done" />
      <AddNewItem btnText="+ Add another list" handleAdd={console.log} />
    </AppContainer>
  );
}

export default App;
