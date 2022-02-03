import { atom, selector } from "recoil";

export type TSchedule = {
  id: number;
  name: string;
  date: Date;
  description: string;
};

const schedule = atom({
  key: "schedule",
  default: [
    {
      id: 1,
      name: "멘토링",
      date: new Date(),
      description: "현직자 직무 에센스 강의",
    },
  ] as TSchedule[],
});

const selectedScheduleId = atom({
  key: "selectedScheduleId",
  default: 0 as number,
});

const selectedSchedule = selector({
  key: "selectedSchedule",
  get: ({ get }) => {
    return get(schedule).find(
      (sch) => sch.id === get(selectedScheduleId)
    ) as TSchedule;
  },
});

export { schedule, selectedScheduleId, selectedSchedule };
