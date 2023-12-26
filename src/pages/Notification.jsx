import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { notifData } from "../data/dummy"

const Notification = () => {
    return ( <div>
         <Card
        sx={{
          minWidth: 275,
          padding: "p-1",
          backgroundColor: "bg-white",
          borderRadius: "rounded-3xl",
          boxShadow: "rgb(113 122 122 / 20%) 0px 5px 30px 10px",
        }}
      >
        <CardContent>
          <div>
            <p className="font-bold text-2xl text-gray-500 ">Notifications</p>
          </div>
          {notifData.map((chat) =>(<div className="hover:bg-gray-100 px-2 rounded-lg">
            <p className="font-bold  text-base mt-4 uppercase">{chat.message}</p>
            <p>{chat.desc}</p>
            <p className="text-gray-500">{chat.time}</p></div>
          ))}
        </CardContent>
      </Card>
    </div> );
}
 
export default Notification;