import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./components/signup/Home";
import Dashboard from "./components/dashboard/index";
import Error from "./Error";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/*" element={<Error />} />
        </Routes>
      </Main>
    </HelmetProvider>
  );
}

export default App;
