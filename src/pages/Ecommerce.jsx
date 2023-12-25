import { BsCurrencyDollar } from "react-icons/bs"
import { earningData } from "../data/dummy"
import { BarChart } from "@mui/x-charts/BarChart"
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart"

const Ecommerce = () => {
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
  return (
    <div className=" mt-32 ml-8">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white p-8 rounded-3xl sidebar">
          <div className="flex justify-between   items-center">
            <div>
              <p className=" font-bold  text-xl text-gray-500 m-1 ">Earnings</p>
              <p className="  text-xl m-1">$63,438.78</p>
              <button className="bg-bg-sb px-4 py-2 m-1  mt-4 rounded-xl text-white">
                Download
              </button>
            </div>
            <div className="ml-16">
              <button className="bg-bg-sb rounded-full p-3  text-white font-bold  text-xl ">
                <BsCurrencyDollar />
              </button>
            </div>
          </div>
        </div>

        <div className="ml-8 items-center flex flex-wrap justify-center gap-3 rounded-3xl sidebar bg-white">
          {earningData.map((item) => {
            return (
              <div className=" px-8 ">
                <div>
                  <button
                    style={{
                      color: item.iconColor,
                      backgroundColor: item.iconBg,
                    }}
                    className=" text-3xl  p-4 rounded-full mb-5"
                  >
                    {item.icon}
                  </button>
                </div>
                <p className="  text-xl m">
                  {item.amount}{" "}
                  <span className={`text-sm text-${item.pcColor} ml-2`}>
                    {item.percentage}
                  </span>
                </p>

                <p className=" text-gray-500 ">{item.title}</p>
              </div>
            )
          })}
        </div>
          <div className="ml-8 mt-8 p-8 rounded-3xl sidebar bg-white">
            <p className=" font-semibold text-lg  mb-10">
              Products Performance
            </p>
            <div className="flex items-center">
              <div>
                <p>
                  {" "}
                  <span className="font-bold  text-3xl mb-3 ">
                    $93,438
                  </span>{" "}
                  <span className="p-1.5 cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className=" text-gray-500 mb-10">Budget</p>
                <p className="font-bold  text-3xl  mb-3">$32,839</p>
                <p className=" text-gray-500">Expense</p>
                <button className="bg-bg-sb px-4 py-2 m-1  mt-10 rounded-xl text-white">
                  Download Report
                </button>
              </div>
              <div className=" ml-20">
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
          </div>
          <div className="flex">
            <div className="ml-8 mt-8 p-8 rounded-3xl sidebar bg-white">
              <div className="flex justify-between   items-center">
                <div>
                  <p className=" font-bold  text-xl text-gray-500 m-1 ">
                    Earnings
                  </p>
                  <p className="  text-xl m-1">$93,438</p>
                  <p className=" text-gray-500">Monthly revenue</p>
                </div>
                <div className="ml-16">
                  <button className="bg-bg-sb rounded-full p-3  text-white font-bold  text-xl ">
                    <BsCurrencyDollar />
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-8 mt-8 p-8 rounded-3xl sidebar bg-white">
              <p className=" font-bold text-2xl ">43,246</p>
              <p className=" text-gray-500">Yearly sales</p>
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
          </div>
      </div>
    </div>
  )
}

export default Ecommerce
