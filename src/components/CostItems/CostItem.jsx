import './CostItem.css'
import CostDate from '../CostDate/CostDate';
import Cards from '../Cards/Cards'


const CostItem = ({ date, title, price }) => {
  
  return (
    <Cards className='cost-item' >
      <CostDate date={date} />
      <div className='cost-item__description'>
        <h2 className='cost-item h2'>{title}</h2>
        <div className='cost-item__price'>${price}</div>
      </div>
    </Cards>
  )

}
export default CostItem;