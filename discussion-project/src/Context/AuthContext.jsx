import { createContext, useState } from "react";

export const authContext = createContext();

function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ isAuth: false});

  const changeAuth = (token) => {
    setAuthState({ isAuth: !authState.isAuth});
  };

  return (
    <authContext.Provider value={{ authState, changeAuth }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;