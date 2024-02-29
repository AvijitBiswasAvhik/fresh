import React, { createContext, useState, useContext } from "react";

const StateContext = createContext({
  manageLogin: false,
  setManageLogin: () => {},
});

export function ContextProvider({ children }) {
  const [manageLogin, setManageLogin] = useState(true);

  return (
    <StateContext.Provider value={{ manageLogin, setManageLogin }}>
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
