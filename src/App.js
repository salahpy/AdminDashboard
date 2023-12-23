import Sidebar from "./scenes/global/Sidebar"
import NavBar from "./scenes/global/NavBar"
import { Routes, Route } from "react-router-dom"
function App() {
  const activeMenu = true

  return (
    <div className="">
      {activeMenu ? (
        <div className="w-72 fixed">
          <Sidebar />
        </div>
      ) : (
        <div></div>
      )}
      <NavBar />
    </div>
  )
}

export default App
