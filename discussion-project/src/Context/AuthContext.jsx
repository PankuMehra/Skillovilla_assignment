import React, { createContext, useState } from "react";

export const userContext = createContext();

function AuthContextProvider({ children }) {
  const [currentUser, setCurrentUser] = React.useState({});

  const getCurrentUser = (data) => {
    console.log('data:', data)
    setCurrentUser({...currentUser, data});
  };


  return (
    <userContext.Provider value={{ currentUser, getCurrentUser }}>
      {children}
    </userContext.Provider>
  );
}

export default AuthContextProvider;
