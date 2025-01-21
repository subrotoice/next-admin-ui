"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import Link from "next/link";
import Image from "next/image";

interface ChartProps {
  title: string;
  icon: string;
  number: number | string;
  chartData: object[];
  dataKey: string;
  color: string;
  percentage: number;
}

const ChartBox = ({
  title,
  icon,
  number,
  chartData,
  dataKey,
  color,
  percentage,
}: ChartProps) => {
  return (
    <div className="flex justify-between text-lg h-full">
      <div className="flex flex-col justify-between flex-[3]">
        <div className="title flex items-center gap-1">
          <Image src={icon} alt="" />
          <span className="text-sm">{title}</span>
        </div>
        <h2 className="text-2xl">{number}</h2>
        <Link href="/" style={{ color: color }} className="text-sm">
          View all
        </Link>
      </div>
      <div className="chartInfo flex flex-col text-right flex-[2]">
        <div className="chart w-full h-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 60 }}
              />
              <Line
                type="monotone"
                dataKey={dataKey}
                stroke={color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text-sm">
          <div
            className="percentage font-bold text-lg"
            style={{ color: percentage < 0 ? "orange" : "limegreen" }}
          >
            {percentage}%
          </div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
