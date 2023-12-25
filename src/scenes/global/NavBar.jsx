import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import { useStateContext } from "../../context/Context"
import Chat from "../../pages/Chat"
import UserProfile from "../../pages/UserProfile"
import Notification from "../../pages/Notification"
import Cart from "../../pages/Cart"

const NavBar = () => {
  const { activeMenu, setActiveMenu , IsClicked , handleClick} = useStateContext()
  const handleActiveMenu = () => setActiveMenu(!activeMenu)

  return (
    <div className="flex justify-between items-center mt-0 py-6 px-4  bg-white">
      <div className="flex justify-center items-center">
        <button onClick={handleActiveMenu}>
          <MenuIcon className="mr-3 ml-8" />
        </button>
        <button>
          <SearchIcon className="ml-3" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={() => handleClick('Cart')}>
          <LocalGroceryStoreOutlinedIcon className="mx-3" />
        </button>
        <button onClick={() => handleClick('Chat')}>
          <ChatBubbleOutlineOutlinedIcon className="mx-3" />
        </button>
        <button onClick={() => handleClick('Notification')}>
          <NotificationsNoneRoundedIcon className="mx-3" />
        </button>
        <button className="flex justify-between mx-3" onClick={() => handleClick('UserProfile')}>
          <p>
            Hi, <span className="font-bold"> Maria</span>
          </p>
          <KeyboardArrowDownOutlinedIcon className="mx-1" />
        </button>
      </div>

      {IsClicked.Cart && <Cart />}
        {IsClicked.chat && (<Chat />)}
        {IsClicked.notification && (<Notification />)}
        {IsClicked.userProfile && (<UserProfile />)}
    </div>
  )
}

export default NavBar
