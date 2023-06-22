import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const data = [
  { name: "Basic Trees", value: 400 },
  { name: "Custom Short Pants", value: 300 },
  { name: "Super Hoodies", value: 200 },
  { name: "T-Shirts", value: 100 },
];

const COLORS = ["#9bdd7c", "#f6dc7d", "#e9a0a0", "#FF8042"];

function App() {
  return (
    <div className="pie-chart">
      <PieChart width={150} height={164}>
        <Pie
          cx={60}
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
          width={280}
          height={100}
          cx={60}
          verticalAlign="middle"
          align="right"
          layout="horizontal"
          // iconType="circle"
          iconSize={10}
          content={() => {
            return (
              <ul className="custom-pie">
                <div className="right-pie">
                  <div className="cirle-text-box-pie">
                    <div className="circle1-pie"></div>
                    <div className="textUsers-pie">Basic Trees</div>
                    <div className="percent1">400</div>
                  </div>

                  <div className="cirle-text-box-pie">
                    <div className="circle2-pie"></div>
                    <div className="textUsers-pie">Custom Short Pants</div>
                    <div className="percent1">300</div>
                  </div>
                  <div className="cirle-text-box-pie">
                    <div className="circle3-pie"></div>
                    <div className="textUsers-pie">Super Hoodies</div>
                    <div className="percent1">200</div>
                  </div>
                  <div className="cirle-text-box-pie">
                    <div className="circle4-pie"></div>
                    <div className="textUsers-pie">T-Shirts</div>
                    <div className="percent1">100</div>
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
