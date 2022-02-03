import React from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Calendar from "./components/Calendar";
import { RecoilRoot } from "recoil";
import "./App.css";

const Container = styled.div`
  height: 977px;
  width: 1499px;
  background-color: #ffffff;
  display: flex;
`;

export enum BoxTypes {
  View = "view",
  Modify = "modify",
  Register = "register",
}

function App() {
  return (
    <RecoilRoot>
      <Container>
        <SideBar />
        <Calendar />
      </Container>
    </RecoilRoot>
  );
}

export default App;
