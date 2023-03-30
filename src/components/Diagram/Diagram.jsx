import DiagramBar from "../DiagramBar/DiagramBar";
import '../Diagram/Diagram.css'

const Diagram = ({ dataSets }) => {

  const dateSetsValues = dataSets.map(dateSet => dateSet.value)

  const maxMountCosts = Math.max(...dateSetsValues)

  return (
    <div className="diagram">
      {dataSets.map(dataSet => {
        return <DiagramBar
          value={dataSet.value}
          maxValue={maxMountCosts}
          label={dataSet.label}
          key={dataSet.label} />
      })}
    </div>
  )
}

export default Diagram;