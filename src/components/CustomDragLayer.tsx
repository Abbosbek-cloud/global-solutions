import { useDragLayer } from "react-dnd";
import { useAppState } from "../hooks/useAppState";
import { Column } from "./Column";
import {
  CustomDragLayerContainer,
  DragPreviewWrapper,
} from "./StyledComponents";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();

  const { currentOffset } = useDragLayer((monitor) => ({
    currentOffset: monitor.getSourceClientOffset(),
  }));

  return draggedItem && currentOffset ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffset}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview />
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
