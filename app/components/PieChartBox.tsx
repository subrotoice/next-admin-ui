import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts";
import { pieChartBox } from "../data";

const PieChartBox = () => {
  return (
    <div className="pieChartBox">
      <h2 className="text-2xl font-semibold mb-4">Leads by Source</h2>
      <div className="chart w-full h-full flex items-center justify-center">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "#fff", borderRadius: "5px" }}
            />
            <Pie
              data={pieChartBox}
              innerRadius={"70%"}
              outerRadius={"90%"}
              paddingAngle={5}
              dataKey="value"
            >
              {pieChartBox.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options flex justify-between text-xs">
        {pieChartBox.map((item) => (
          <div
            className="option flex flex-col gap-1 items-center"
            key={item.name}
          >
            <div className="title flex items-center gap-2">
              <div
                className="optionDot w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
