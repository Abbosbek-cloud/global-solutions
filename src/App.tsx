import React from "react";
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
    </AppContainer>
  );
}

export default App;
