import React from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { schedule, selectedScheduleId } from "../state/schedule";
import { viewState } from "../state/viewState";
import "./Calendar.css";

const Schedule = styled.div`
  height: 20px;
  width: 139px;
  background-color: #ffaf65;
`;

export default function Calendar() {
  const [schedules] = useRecoilState(schedule);
  const setViewState = useSetRecoilState(viewState);
  const setSelectedSchedule = useSetRecoilState(selectedScheduleId);

  const handleClickSchedule = (sch: any) => {
    setViewState("view");
    setSelectedSchedule(sch.id);
  };

  const renderDay = (day: Date) => {
    return (
      <div>
        <div>{day.getDate()}</div>
        {schedules
          .filter(
            ({ date }) =>
              date.getMonth() === day.getMonth() &&
              date.getDate() === day.getDate()
          )
          .map((sch) => (
            <Schedule onClick={() => handleClickSchedule(sch)}>
              {sch.name}
            </Schedule>
          ))}
      </div>
    );
  };
  return (
    <DayPicker
      showOutsideDays={true}
      weekdaysShort={["S", "M", "T", "W", "T", "F", "S"]}
      renderDay={renderDay}
    />
  );
}
