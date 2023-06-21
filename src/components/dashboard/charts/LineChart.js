import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        "https://datausa.io/api/data?drilldowns=Nation&measures=Population"
      );
      const responseData = response.data;

      setData(responseData.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  return (
    <div className="chart">
      <div className="activites-card">
        <div className="left">
          <h1>United State's Population</h1>
          <select>
            <option>May-June 2021</option>
            <option>May-June 2021</option>
          </select>
        </div>
      </div>

      <div className="line-chart">
        <ResponsiveContainer width="100%" aspect={3.6}>
          <LineChart
            data={data}
            width={1000}
            height={0}
            margin={{ top: 5, right: 20, left: 26, bottom: 5 }}
          >
            <CartesianGrid
              horizontal={true}
              vertical={false}
              strokeWidth={1}
              stroke="#EAEAEA"
              // strokeDasharray="5 5"
            />
            <Legend
              align="right"
              verticalAlign="top"
              layout="horizontal"
              wrapperStyle={{
                marginBottom: 20,
                paddingBottom: 20,
                color: "#000",
              }}
              iconType="circle"
              iconSize={10}
              payload={[
                { value: "Guest", type: "monotone" },
                // { value: "User", type: "monotone" },
              ]}
              content={() => {
                return (
                  <ul className="custom-legend">
                    <div className="right">
                      <div className="cirle-text-box">
                        <div className="circle1"></div>
                        <div className="textUsers">USA</div>
                      </div>

                      {/* <div className="cirle-text-box">
                        <div className="circle2"></div>
                        <div className="textUsers">User</div>
                      </div> */}
                    </div>
                  </ul>
                );
              }}
            />

            <XAxis
              tick={({ x, y, payload }) => (
                <text x={x + 100} y={y} dy={16} textAnchor="middle">
                  {payload.value}
                </text>
              )}
              axisLine={false}
              dataKey="ID Year"
              interval={"preserveStartEnd"}
              tickFormatter={(value) => value + " "}
            />
            <YAxis
              domain={[255000000, "auto"]}
              axisLine={false}
              tick={{
                stroke: "#858585;",
                strokeWidth: 1,
                fontFamily: "lato",
                fontSize: 14,
              }}
              tickLine={{ stroke: "", strokeWidth: 0 }}
              // ticks={yTickValues}
              // tickCount={yTickValues.length}
            />
            <Tooltip contentStyle={{ backgroundColor: "white" }} />
            <Line
              type="monotone"
              dataKey="Population"
              stroke="#9BDD7C"
              strokeWidth={3}
              dot={false}
            />
            {/* <Line
              type="monotone"
              dataKey="Nation"
              stroke="#E9A0A0"
              strokeWidth={3}
              dot={false}
            /> */}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
