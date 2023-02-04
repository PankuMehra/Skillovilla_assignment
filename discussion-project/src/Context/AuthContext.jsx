import { createContext, useState } from "react";

export const authContext = createContext();

function AuthContextProvider({ children }) {


  return (
    <authContext.Provider value={{ authState, changeAuth }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;