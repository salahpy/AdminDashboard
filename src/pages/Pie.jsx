import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart"

const data = [
    { value: 6, label: "2021" },
    { value: 5, label: "2020" },
    { value: 6, label: "2019" },
    { value: 4, label: "2018" },
  ]

  const size = {
    width: 400,
    height: 200,
  }

const Pie = () => {
    return ( <div>
        <div className="mt-28 ml-20">
          <p className="text-xl text-gray-500">Charts</p> <p className=" font-bold text-3xl">Pie</p></div>
          <div  className=" mt-5 rounded-xl ml-20 p-14 bg-white sidebar">
          <PieChart
                series={[
                  {
                    arcLabelMinAngle: 45,
                    data,
                  },
                ]}
                sx={{
                  [`& .${pieArcLabelClasses.root}`]: {
                    fill: "white",
                    fontWeight: "thin",
                  },
                }}
                {...size}
              />
            
          </div>
        
      </div>  );
}
 
export default Pie;