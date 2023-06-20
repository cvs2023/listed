import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./components/signup/Home";
import Dashboard from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
