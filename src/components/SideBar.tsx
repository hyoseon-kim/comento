import React from "react";
import styled from "styled-components";
import ModifyBox from "./ModifyBox";
import RegisterBox from "./RegisterBox";
import Title from "./Title";
import ViewBox from "./ViewBox";

const Container = styled.div`
  height: 977px;
  width: 377px;
  background-color: #e5e7ef;
  font-family: NanumSquare, Apple SD Gothic Neo, sans-serif;
`;

const Box = styled.div`
  border-radius: 9.449801445007324px;
  height: 263px;
  width: 352px;
  background-color: #f2f2f2;
`;

enum BoxTypes {
  View,
  Modify,
  Register,
}

const SideBar: React.VFC = () => {
  let boxType = <ViewBox />;

  return (
    <Container>
      <Title text="Todo Calendar" />
      <Box>{boxType}</Box>
    </Container>
  );
};

export default SideBar;
