import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { schedule, selectedSchedule } from "../state/schedule";
import { viewState } from "../state/viewState";
import Button from "./Button";
import { BoxTypes } from "./SideBar";

const Text = styled.div`
  height: 28px;
  left: 99px;
  top: 24px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 13px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export default function ViewBox() {
  const selectedSch = useRecoilValue(selectedSchedule);
  const setSchedule = useSetRecoilState(schedule);
  const setViewState = useSetRecoilState(viewState);

  const handleClickModify = () => {
    setViewState(BoxTypes.Modify);
  };

  const handleClickDelete = () => {
    setSchedule((old) => [...old.filter((o) => o.id !== selectedSch.id)]);
    setViewState(BoxTypes.Register);
  };

  return (
    <div style={{ height: "136px", width: "362px", padding: "10px;" }}>
      <Text>
        {selectedSch?.name} / {selectedSch?.description}
      </Text>
      <Button text="Modify" onClick={handleClickModify} />
      <Button text="Delete" onClick={handleClickDelete} />
    </div>
  );
}
