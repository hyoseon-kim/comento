import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { viewState } from "../state/viewState";
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

export enum BoxTypes {
  View = "view",
  Modify = "modify",
  Register = "register",
}

const BoxComponent = {
  [BoxTypes.View]: ViewBox,
  [BoxTypes.Register]: RegisterBox,
  [BoxTypes.Modify]: ModifyBox,
};

const SideBar: React.VFC = () => {
  const view = useRecoilValue(viewState);
  const Component = BoxComponent[view as BoxTypes];
  const today = new Date();

  return (
    <Container>
      <Title
        text={`Todo Calendar ${today.getFullYear()}/0${
          today.getMonth() + 1
        }/0${today.getDate()}
        `}
      />
      <Box>
        <Component />
      </Box>
    </Container>
  );
};

export default SideBar;
