import CostItem from "../CostItems/CostItem"
import '../CostList/CostList.css'


const CostList = ({ costs }) => {

  if (!costs.length) {
    return <h3 className="cost-list__fallback">Вы не потратились в этом году!</h3>
  } else {
    return (costs.map(cost =>
      <CostItem
        className="cost-list"
        key={cost.id}
        date={cost.date}
        title={cost.title}
        price={cost.price} />))
  }
}

export default CostList;