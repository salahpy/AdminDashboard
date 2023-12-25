import React, { createContext, useContext, useState } from "react"

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [IsClicked, setIsClicked] = useState(initialState)

  const handleClick = (clicked) =>
    setIsClicked({ ...initialState, [clicked]: true })

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu, IsClicked, handleClick }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)