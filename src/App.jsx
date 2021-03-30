import Navbar from "./components/Navbar/Navbar";
import MainView from "./views/MainView/MainView";
import { Router } from "@reach/router";
import BackendInterface from "./utils/BackendInterface";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(BackendInterface.exampleData);
  }, []);

  return (
    <Navbar>
      <Router>
        <MainView path="/" data={data} />
      </Router>
    </Navbar>
  );
}

export default App;
