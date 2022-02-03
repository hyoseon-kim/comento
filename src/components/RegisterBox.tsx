import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { schedule, selectedScheduleId } from "../state/schedule";
import { viewState } from "../state/viewState";
import Button from "./Button";
import Input from "./Input";
import { BoxTypes } from "./SideBar";

export default function RegisterBox() {
  const [name, setName] = useState("");
  const setSchedule = useSetRecoilState(schedule);
  const setSelectedId = useSetRecoilState(selectedScheduleId);
  const setViewState = useSetRecoilState(viewState);

  const [description, setDescription] = useState("");

  return (
    <>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        text="Register"
        onClick={() => {
          const id = Math.random() * 10;
          setSchedule((old) => [
            ...old,
            { id, date: new Date(), name, description },
          ]);
          setSelectedId(id);
          setViewState(BoxTypes.View);
        }}
      />
    </>
  );
}
