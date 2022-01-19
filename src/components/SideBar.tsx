import React from "react";
import styled from "styled-components";
import Title from "./Title";

const Container = styled.div`
  height: 977px;
  width: 377px;
  background-color: #e2e2e2;
`;

const Box = styled.div`
  border-radius: 9.449801445007324px;
  height: 263px;
  width: 352px;
  background-color: #f2f2f2;
`;

const SideBar: React.VFC = () => {
  return (
    <Container>
      <Title />
      <Box />
    </Container>
  );
};

export default SideBar;
