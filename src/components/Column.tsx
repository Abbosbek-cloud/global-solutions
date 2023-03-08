import { AddNewItem } from "./AddItem";
import { Card } from "./Card";
import {
  CardContainer,
  ColumnContainer,
  ColumnTitle,
} from "./StyledComponents";

type ColumnProps = React.PropsWithChildren<{
  text: string;
}>;

export const Column = ({ text }: ColumnProps) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      <Card text="First item" />
      <Card text="Second item" />
      <Card text="Third item" />
      <AddNewItem btnText="+ Add another item" handleAdd={console.log} dark />
    </ColumnContainer>
  );
};
