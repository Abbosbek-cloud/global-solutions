import { useAppState } from "../hooks/useAppState";
import { addToTask } from "../store/actions";
import { AddNewItem } from "./AddItem";
import { Card } from "./Card";
import {
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./StyledComponents";

type ColumnProps = React.PropsWithChildren<{
  text: string;
  id: string;
}>;

export const Column = ({ text, id }: ColumnProps) => {
  const { getTasksByListId, dispatch } = useAppState();
  const tasks = getTasksByListId(id);

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map((task) => (
        <Card text={task.text} key={task.id} id={task.id} />
      ))}
      <AddNewItem
        btnText="+ Add another item"
        handleAdd={(text) => dispatch(addToTask(text, id))}
        dark
      />
    </ColumnContainer>
  );
};
