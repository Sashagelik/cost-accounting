import { useState } from 'react';
import '../NewCosts/CostsForm.css'

const CostsForm = ({ onSaveCostData, setshowCost }) => {

  const [inputTitle, setInputTitle] = useState('')
  const [inputPrice, setInputPrice] = useState('')
  const [inputData, setInputData] = useState('')


  const nameChangeHandler = (e) => {
    setInputTitle(e.target.value);

  }
  const priceChangeHandler = (e) => {
    setInputPrice(e.target.value);

  }
  const dataChangeHandler = (e) => {
    setInputData(e.target.value);

  }

  const submitHandler = (e) => {
    e.preventDefault()

    const formDate = {
      title: inputTitle,
      price: inputPrice,
      date: new Date(inputData)
    }
    onSaveCostData(formDate)
    setInputTitle('')
    setInputPrice('')
    setInputData('')
    setshowCost('')
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input placeholder='Расход...' onChange={nameChangeHandler} type="text" value={inputTitle} />
        </div>
        <div className="new-cost__control">
          <label>Цена</label>
          <input placeholder='Цена...' onChange={priceChangeHandler} type="number" min='0.01' step='0.01' value={inputPrice} />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input onChange={dataChangeHandler} type="date" min='2020-01-01' max='2023-12-31' value={inputData} />
        </div>
        <div className="new-cost__action">
          <button type='submit'>Добавить расход</button>
          <button onClick={() => setshowCost(false)}>Отмена</button>
        </div>
      </div>
    </form>
  )
}

export default CostsForm;