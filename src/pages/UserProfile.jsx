import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"

const UserProfile = () => {
  return (
    <div>
      <Card
        sx={{
          minWidth: 225,
          padding: "p-1",
          backgroundColor: "bg-white",
          borderRadius: "rounded-3xl",
          boxShadow: "rgb(113 122 122 / 20%) 0px 5px 30px 10px",
        }}
      >
        <CardContent>
          <div>
            <p className="font-bold text-lg text-gray-500 ">User Profile</p>
          </div>
          <p className=" text-lg mt-4  capitalize">Salah Nacef</p>
          <p className=" text-base text-gray-500">Administrator</p>
          <p className="text-base text-gray-500">s.nacef@esi.dz</p>
            <p className="text-gray-500"></p>
            <div className="bg-bg-sb text-white rounded-xl mt-6">
              <button className="w-full p-3">Log Out</button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default UserProfile
