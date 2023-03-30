import CostsForm from "./CostsForm";
import '../NewCosts/NewCosts.css'
import { useState } from "react";


const NewCosts = ({ onAddCosts }) => {

const [showCost, setshowCost] = useState (false)

const saveCostDateHandler = (inputCostDate) => {

  const costDate = { 
    ...inputCostDate, 
    id: Math.random().toString(), 
  } 
  onAddCosts(costDate)
}

const showFormHandler = () => {
  setshowCost(true)

}

  return (
    <div className="new-cost">
      {showCost ? <CostsForm setshowCost={setshowCost} onSaveCostData = {saveCostDateHandler} />:<button onClick={showFormHandler}>
        Добавить новый расход
      </button>}   
    </div>
  )
};

export default NewCosts;