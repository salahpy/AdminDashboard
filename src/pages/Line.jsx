import { LineChart } from '@mui/x-charts/LineChart';

const Line = () => {
    return (<div>
        <div className="mt-28 ml-20">
          <p className="text-xl text-gray-500">Charts</p> <p className=" font-bold text-3xl">Line</p></div>
          <div  className=" mt-5 rounded-xl ml-20 p-14 bg-white sidebar">
          <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
    />
            
          </div>
        
      </div>  );
}
 
export default Line