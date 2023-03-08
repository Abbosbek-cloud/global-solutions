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
      <CardContainer>FirstItem</CardContainer>
      <CardContainer>SecondItem</CardContainer>
      <CardContainer>ThirdItem</CardContainer>
    </ColumnContainer>
  );
};
