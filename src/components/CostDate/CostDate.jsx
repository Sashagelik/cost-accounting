import './CostDate.css'
import Cards from '../Cards/Cards'

const CostDate = ({ date }) => {

  const month = date.toLocaleDateString('ru-RU', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleDateString('ru-RU', { day: '2-digit' });


  return (
    <Cards className="cost-date">
      <span className='cost-date__month '>{month}</span>
      <span className='cost-date__year'>{year}</span>
      <span className='cost-date__day '>{day}</span>
    </Cards>
  )
}

export default CostDate; 