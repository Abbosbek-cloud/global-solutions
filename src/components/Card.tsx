import { CardContainer } from "./StyledComponents";

type CardProps = {
  text: string;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
