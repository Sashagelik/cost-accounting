import { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCosts from "./components/NewCosts/NewCosts";
import date from "./date/date";

function App() {
  const [costs, setCosts] = useState(date);

  const addCostsHandler = (cost) =>
    setCosts((prevCosts) => [cost, ...prevCosts]);

  return (
    <>
      <h1 className="main-title">Калькуляция расходов</h1>
      <NewCosts onAddCosts={addCostsHandler} />
      <Costs costs={costs} />
    </>
  )
}

export default App;
