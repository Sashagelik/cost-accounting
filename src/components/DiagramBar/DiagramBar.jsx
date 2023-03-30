import '../DiagramBar/DiagramBar.css'

const DiagramBar = ({ label, maxValue, value }) => {

  let barFillHeight = '0%'

  if (maxValue) {
    barFillHeight = Math.round(value / maxValue * 100) + '%'
  }

  return (
    <div className='diagram-bar'>
      <div className='diagram-bar__inner'>
        <div className='diagram-bar__fill' style={{ height: barFillHeight }}></div>
      </div>
      <div className='diagram-bar__label'>{label}</div>
    </div>
  )
}

export default DiagramBar;