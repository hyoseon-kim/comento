import React from "react";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Calendar from "./components/Calendar";
import "./App.css";

const Container = styled.div`
  height: 977px;
  width: 1499px;
  background-color: #ffffff;
  display: flex;
`;

function App() {
  return (
    <Container>
      <SideBar />
      <Calendar />
    </Container>
  );
}

export default App;
