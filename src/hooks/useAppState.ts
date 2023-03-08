import { useContext } from "react";
import { AppStateContext } from "../store/Provider";

export const useAppState = () => {
  return useContext(AppStateContext);
};
