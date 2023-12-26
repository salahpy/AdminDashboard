import Sidebar from "./scenes/global/Sidebar"
import NavBar from "./scenes/global/NavBar"
import Ecommerce from "./pages/Ecommerce"
import Orders from "./pages/Orders"
import Calendar from "./pages/Calendar"
import Employees from "./pages/Employees"
import Line from "./pages/Line"
import Bar from "./pages/Bar"
import { useStateContext } from "./context/Context"
import Pie from "./pages/Pie"
import { Routes, Route, BrowserRouter } from "react-router-dom"
function App() {
  const { activeMenu } = useStateContext()

  return (
    <BrowserRouter>
      <div className=" flex relative">
        <div className="fixed w-full navbar z-50">
          <NavBar />
        </div>
        <div className="flex ">
          {activeMenu ? (
            <div className="fixed  w-64 bg-white ml-8 sidebar  mt-28 rounded-3xl">
              <Sidebar />
            </div>
          ) : (
            <div></div>
          )}{" "}
          <div
            className={
              activeMenu
                ? " bg-main-bg min-h-screen md:ml-64 w-full  "
                : "bg-main-bg  w-full min-h-screen flex-2 "
            }
          >
            <Routes>
              {/* dashboard  */}
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />

              {/* apps  */}
              <Route path="/calendar" element={<Calendar />} />

              {/* charts  */}
              <Route path="/line" element={<Line />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
            <div className="mb-10">
      </div>
          </div>
          
        </div>
        </div>
    </BrowserRouter>
  )
}

export default App
