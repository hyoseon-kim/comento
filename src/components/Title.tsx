import React from "react";
import styled from "styled-components";

const Text = styled.div`
  text-align: left;
  vertical-align: middle;
  font-size: 20.644615173339844px;
  font-family: Inter;
  line-height: auto;
  color: #7f7b7b;
  padding: 10px;
`;

type TProps = {
  text: string;
};

export default function Title({ text }: TProps) {
  return <Text>{text}</Text>;
}
