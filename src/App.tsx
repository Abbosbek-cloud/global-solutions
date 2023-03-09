import { AddNewItem } from "./components/AddItem";
import { Column } from "./components/Column";
import { CustomDragLayer } from "./components/CustomDragLayer";
import { AppContainer } from "./components/StyledComponents";
import { useAppState } from "./hooks/useAppState";
import { addToList } from "./store/actions";

function App() {
  const { lists, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} isPreview />
      ))}
      <AddNewItem
        btnText="+ Add another list"
        handleAdd={(text) => dispatch(addToList(text))}
      />
    </AppContainer>
  );
}

export default App;
