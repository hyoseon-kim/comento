import { atom } from "recoil";

const viewState = atom({
  key: "viewState",
  default: "register",
});

export { viewState };
