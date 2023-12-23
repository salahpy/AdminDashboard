import SearchIcon from "@mui/icons-material/Search"
import MenuIcon from "@mui/icons-material/Menu"
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"

const NavBar = () => {
  return (
    <div className="flex my-3 z-1000 items-center">
      <div className="pl-8">LOGO</div>
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <button>
            <MenuIcon className="mr-3" />
          </button>
          <button>
            <SearchIcon className="ml-3" />
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button>
            <LocalGroceryStoreOutlinedIcon className="mx-3" />
          </button>
          <button>
            <ChatBubbleOutlineOutlinedIcon className="mx-3" />
          </button>
          <button>
            <NotificationsNoneRoundedIcon className="mx-3" />
          </button>
          <button className="flex justify-between mx-3">
            <p>
              Hi, <span className="font-bold"> Maria</span>
            </p>
            <KeyboardArrowDownOutlinedIcon className="mx-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
