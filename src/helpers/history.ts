import { NavigateFunction, Location } from "react-router-dom";

type History = {
  navigate: NavigateFunction | null;
  location: Location | null;
};

export const history: History = {
  navigate: null,
  location: null,
};

console.log("test");
