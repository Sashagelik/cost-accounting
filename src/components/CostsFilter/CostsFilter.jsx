import '../CostsFilter/CostsFilter.css'


const CostsFilter = ({onChangeYear, selectedYear}) => {
 

  const yearChangeHandler = (e) => {
    onChangeYear(e.target.value);
  }

  return(
    <div className='costs-filter'>
      <div className='costs-filter__control'>
        <label>Выбор по году</label>
          <select value={selectedYear} onChange={yearChangeHandler}>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
      </div>
    </div>

  )
}

export default CostsFilter;