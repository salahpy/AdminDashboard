import React, { createContext, useContext, useState } from "react"

const StateContext = createContext()

const initialState = {
  Chat: false,
  Cart: false,
  CserProfile: false,
  Notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [IsClicked, setIsClicked] = useState(initialState)
  
  const handleClick = (key) => {
    setIsClicked((prevIsClicked) => ({
      ...prevIsClicked,
      [key]: !prevIsClicked[key],
    }));
  };

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, IsClicked, handleClick }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)
