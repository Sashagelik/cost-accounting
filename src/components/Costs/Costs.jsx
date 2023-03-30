import './Costs.css';
import Cards from '../Cards/Cards';
import CostsFilter from '../CostsFilter/CostsFilter';
import { useState } from 'react';
import CostList from '../CostList/CostList';
import CostDiagram from '../CostsDiagram/CostDiagram';

const Costs = ({ costs }) => {
  const [selectedYear, setSelectedYear] = useState('2023')

  const onYearChangeHandler = (data) => {
    setSelectedYear(data)
  }

  const filtredCosts = costs.filter(cost => {
    return String(cost.date.getFullYear()) === selectedYear
  })



  return (
    <Cards className="costs">
      <CostsFilter selectedYear={selectedYear} onChangeYear={onYearChangeHandler} />
      <CostDiagram costs={filtredCosts}/>
      <CostList costs={filtredCosts} />
    </Cards>
  )
}

export default Costs;