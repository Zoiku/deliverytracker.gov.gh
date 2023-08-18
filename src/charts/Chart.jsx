import Chart from "echarts-for-react";
import { pie as option } from "./Options";

const ChartComponent = () => {
  return <Chart style={{ height: "inherit", width: "100%" }} option={option} />;
};

export default ChartComponent;
