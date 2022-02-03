import { MouseEvent } from "react";
import styled from "styled-components";

type TButton = {
  text: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

const ButtonComponent = styled.button`
  margin: 10px;
  position: flex;
  width: 113.18px;
  height: 33.67px;
  left: 45px;
  top: 71.78px;

  background: #383838;
  border-radius: 5.02122px;
  border-width: 0px;
  color: #ffffff;
`;

export default function Button({ text, onClick }: TButton) {
  return <ButtonComponent onClick={onClick}>{text}</ButtonComponent>;
}
