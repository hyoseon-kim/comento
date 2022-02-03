import React, { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { schedule, selectedSchedule } from "../state/schedule";
import { viewState } from "../state/viewState";
import Button from "./Button";
import Input from "./Input";
import { BoxTypes } from "./SideBar";

export default function ModifyBox() {
  const sch = useRecoilValue(selectedSchedule);
  const setSchedule = useSetRecoilState(schedule);
  const setViewState = useSetRecoilState(viewState);
  const [name, setName] = useState(sch?.name || "");
  const [description, setDescription] = useState(sch?.description || "");

  return (
    <>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <Input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        text="Modify"
        onClick={() => {
          setSchedule((old) => [
            ...old.filter((o) => o.id !== sch.id),
            { ...sch, name, description },
          ]);
          setViewState(BoxTypes.View);
        }}
      />
      <Button
        text="Cancel"
        onClick={() => {
          setViewState(BoxTypes.Register);
        }}
      />
    </>
  );
}
