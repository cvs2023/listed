import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./components/signup/Home";
import Dashboard from "./components/dashboard/dashboard";
import Error from "./Error";

function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Dashboard />} />
          <Route path="/schedules" element={<Dashboard />} />
          <Route path="/users" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="/help" element={<Dashboard />} />
          <Route path="/contactUs" element={<Dashboard />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
