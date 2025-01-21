"use client";

import BarChartBox from "./components/BarChartBox";
import BigChartBox from "./components/BigChartBox";
import ChartBox from "./components/ChartBox";
import PieChartBox from "./components/PieChartBox";
import TopBox from "./components/TopBox";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxRevenue,
  chartBoxUser,
} from "./data";

export default function Home() {
  return (
    <>
      {/* <div className="bg-red-200 sm:bg-blue-300 md:bg-yellow-300 lg:bg-green-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(10rem,_auto)] grid-flow-dense gap-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[minmax(10rem,_auto)] grid-flow-dense gap-4">
        <div className="p-4 rounded border border-soft-bg row-span-3">
          <TopBox />
        </div>
        <div className="p-4 rounded border border-soft-bg">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="p-4 rounded border border-soft-bg">
          <ChartBox {...chartBoxUser} />
        </div>
        <div className="p-4 rounded border border-soft-bg row-span-3">
          <PieChartBox />
        </div>
        <div className="p-4 rounded border border-soft-bg">
          <ChartBox {...chartBoxConversion} />
        </div>
        <div className="p-4 rounded border border-soft-bg">
          <ChartBox {...chartBoxRevenue} />
        </div>
        <div className="p-4 rounded border border-soft-bg row-span-2 col-span-2 hidden md:block">
          <BigChartBox />
        </div>
        <div className="p-4 rounded border border-soft-bg">
          <BarChartBox {...barChartBoxVisit} />
        </div>
        <div className="p-4 rounded border border-soft-bg">
          <BarChartBox {...barChartBoxRevenue} />
        </div>
      </div>
    </>
  );
}
