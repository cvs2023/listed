import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Category 1", value: 400 },
  { name: "Category 2", value: 300 },
  { name: "Category 3", value: 200 },
  { name: "Category 4", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function App() {
  return (
    <div className="pie-chart">
      <PieChart
        width={250}
        height={164}
        //sResponsive={false}>
      >
        <Pie
          cx={300 / 4}
          data={data}
          startAngle={0}
          nameKey="name"
          valueKey="value"
          dataKey="value"
          labelLine={true}
          animationDuration={1000}
          animationEasing="ease-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          align="right"
          layout="horizontal"
          iconType="circle"
          iconSize={10}
          payload={[
            { value: "Guest", type: "monotone" },
            // { value: "User", type: "monotone" },
          ]}
          content={() => {
            return (
              <ul className="custom-pie">
                <div className="right-pie">
                  <div className="cirle-text-box-pie">
                    <div className="circle1-pie"></div>
                    <div className="textUsers-pie">USA</div>
                  </div>

                  <div className="cirle-text-box-pie">
                    <div className="circle2-pie"></div>
                    <div className="textUsers-pie">User</div>
                  </div>
                </div>
              </ul>
            );
          }}
        />
      </PieChart>
    </div>
  );
}

export default App;
