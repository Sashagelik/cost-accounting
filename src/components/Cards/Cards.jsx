import '../Cards/Cards.css'

const Cards = ({children, className}) => {

  const classes = `cards + ${className}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
export default Cards;