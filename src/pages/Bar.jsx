import { BarChart } from "@mui/x-charts/BarChart"

const Bar = () => {
    return ( <div>
        <div className="mt-28 ml-20">
          <p className="text-xl text-gray-500">Charts</p> <p className=" font-bold text-3xl">Bar</p></div>
          <div  className=" mt-5 rounded-xl ml-20 bg-white sidebar p-14">
          <div className="">
                <BarChart
                  series={[
                    { data: [3, 4, 1, 6, 5], stack: "A", label: "Series A1" },
                    { data: [4, 3, 1, 5, 8], stack: "A", label: "Series A2" },
                    { data: [4, 2, 5, 4, 1], stack: "B", label: "Series B1" },
                    { data: [2, 8, 1, 3, 1], stack: "B", label: "Series B2" },
                    { data: [10, 6, 5, 8, 9], label: "Series C1" },
                  ]}
                  width={600}
                  height={350}
                />
              </div>
            
          </div>
        
      </div>  );
}
 
export default Bar;