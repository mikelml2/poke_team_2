import React, { useContext, useReducer } from "react";
import { getInitialState, stateReducer } from "./appReducer";
import { IAppContextComponent, IAppContext } from "../types/types";

export const AppContext = React.createContext<IAppContext | null>(null);

export const AppContextComponent = ({
  children,
  data,
  ...props
}: IAppContextComponent) => {
  const defaultState = getInitialState();
  const appData = {
    ...defaultState,
    ...data,
    ...props,
  };

  const [store, dispatch] = useReducer(stateReducer, appData);

  const state = { dispatch, store };

  return (
    <AppContext.Provider value={{ ...state }} {...props}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "App components cannot be rendered outside the AppContextComponent components"
    );
  }
  return context;
};
