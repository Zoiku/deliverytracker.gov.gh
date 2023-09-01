import Chart from "echarts-for-react";
import { pieDesktop, pieMobile } from "./Options";
import "../styles/Chart.css";

const ChartComponent = () => {
  return (
    <div className="echarts-container">
      <Chart className="echarts echarts-desktop" option={pieDesktop} />
      <Chart className="echarts echarts-mobile" option={pieMobile} />
    </div>
  );
};

export default ChartComponent;
