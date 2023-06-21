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
const pdata = [
  {
    day: "Week1",
    activities: 100,
    fees: 100,
  },
  {
    day: "Week2",
    activities: 400,
    fees: 202,
  },
  {
    day: "Week3",
    activities: 200,
    fees: 300,
  },
  {
    day: "Week4",
    activities: 100,
    fees: 200,
  },

  {
    day: "Week5",
    activities: 600,
    fees: 100,
  },
  {
    day: "Week6",
    activities: 700,
    fees: 500,
  },
];
const yTickValues = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const firstXValue = 1;
function App() {
  return (
    <div className="activites-chart">
      <div className="activites-card">
        <div className="left">
          <h1>Activities</h1>
          <select>
            <option>May-June 2021</option>
            <option>May-June 2021</option>
          </select>
        </div>

        {/* <div className="right">
          <div className="cirle-text-box">
            <div className="circle1"></div>
            <div>Guest</div>
          </div>
          <div className="cirle-text-box">
            <div className="circle2"></div>
            <div>User</div>
          </div>
        </div> */}
      </div>

      <div className="line-chart">
        <ResponsiveContainer width="100%" aspect={2}>
          <LineChart
            data={pdata}
            width={1000}
            height={0}
            margin={{ top: 5, right: 20, left: -22, bottom: 5 }}
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
                { value: "User", type: "monotone" },
              ]}
              content={() => {
                return (
                  <ul className="custom-legend">
                    <div className="right">
                      <div className="cirle-text-box">
                        <div className="circle1"></div>
                        <div className="textUsers">Guest</div>
                      </div>
                      <div className="cirle-text-box">
                        <div className="circle2"></div>
                        <div className="textUsers">User</div>
                      </div>
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
              dataKey="day"
              interval={"preserveStartEnd"}
              tickFormatter={(value) => value + " "}
            />
            <YAxis
              domain={[0, "auto"]}
              axisLine={false}
              tick={{
                stroke: "#858585;",
                strokeWidth: 1,
                fontFamily: "lato",
                fontSize: 14,
              }}
              tickLine={{ stroke: "", strokeWidth: 0 }}
              ticks={yTickValues}
              tickCount={yTickValues.length}
            />
            <Tooltip contentStyle={{ backgroundColor: "white" }} />
            <Line
              type="monotone"
              dataKey="activities"
              stroke="#9BDD7C"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="fees"
              stroke="#E9A0A0"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default App;
