import { CardContainer } from "./StyledComponents";

type CardProps = {
  text: string;
  id: string;
};

export const Card = ({ text, id }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
