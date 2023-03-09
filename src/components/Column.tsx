import { useRef } from "react";
import { useDrop } from "react-dnd";
import { throttle } from "throttle-debounce-ts";
import { useAppState } from "../hooks/useAppState";
import { useItemDrag } from "../hooks/useItemDrag";
import { addToTask, moveList } from "../store/actions";
import { isHidden } from "../utils/isHidden";
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
  isPreview?: boolean;
}>;

export const Column = ({ text, id, isPreview }: ColumnProps) => {
  console.log(isPreview);
  const { getTasksByListId, dispatch, draggedItem } = useAppState();
  const tasks = getTasksByListId(id);
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "COLUMN",
    hover: throttle(200, () => {
      if (!draggedItem) {
        return;
      }
      if (draggedItem.type === "COLUMN") {
        if (draggedItem.id === id) return;
        dispatch(moveList(draggedItem.id, id));
      }
    }),
  });

  const { drag } = useItemDrag({ type: "COLUMN", id, text });

  return (
    <ColumnContainer
      ref={ref}
      isHidden={isHidden(draggedItem, "COLUMN", id, isPreview)}
      isPreview={isPreview}
    >
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
