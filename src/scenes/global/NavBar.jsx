import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import Tooltip from '@mui/material/Tooltip';
import { useStateContext } from "../../context/Context"
import Chat from "../../pages/Chat"
import UserProfile from "../../pages/UserProfile"
import Notification from "../../pages/Notification"

const NavBar = () => {
  const { activeMenu, setActiveMenu, IsClicked, handleClick } =
    useStateContext()
  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className="flex justify-between items-center mt-0 py-4 px-4  bg-white">
      <div className="flex justify-center items-center ml-10 p-2 hover:bg-gray-100 hover:rounded-full">
      <Tooltip title="Menu">  <button onClick={handleActiveMenu}>
          <MenuIcon />
        </button>
        </Tooltip>
      </div>
      <div className="flex justify-center items-center">
        <div className="mx-3 p-2 hover:bg-gray-100 hover:rounded-full"><Tooltip title="Chat"> 
          <button onClick={() => handleClick("Chat")}>
            <ChatBubbleOutlineOutlinedIcon />
          </button></Tooltip>
        </div>
        <div className="mx-3 p-2 hover:bg-gray-100 hover:rounded-full"><Tooltip title="Notification"> 
          <button onClick={() => handleClick("Notification")}>
            <NotificationsNoneRoundedIcon />
          </button></Tooltip>
        </div>
        <div className=" mx-3 ml-10 py-2 px-4 hover:bg-gray-100 hover:rounded-lg"><Tooltip title="Profile"> 
        <button className="flex justify-between "
          onClick={() => handleClick("UserProfile")}
        >
          <p>
            Hi, <span className="font-bold">Salah</span>
          </p>
          <KeyboardArrowDownOutlinedIcon className="mx-1" />
        </button></Tooltip>
      </div></div>

      {IsClicked.Chat && <div className="top-16  right-72  absolute"><Chat /></div>}
      {IsClicked.Notification && <div className="top-16  right-56 sidebar absolute"><Notification /></div>}
      {IsClicked.UserProfile && <div className="top-16  right-12 sidebar absolute"><UserProfile /></div>}
    </div>
  )
}

export default NavBar
