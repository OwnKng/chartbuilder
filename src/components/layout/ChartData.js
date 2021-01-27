import Controls from "./styled/Control"

const ChartData = ({ open, setOpen, handleChange }) => {
  return (
    <Controls
      title='data'
      id='data'
      position={open}
      setPosition={() => setOpen("data")}
    >
      <h4>Select data</h4>
      <div>
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value='economicData'>Economic data</option>
          <option value='timeSeries'>Time series</option>
          <option value='timeSeries2018'>2018 data</option>
        </select>
      </div>
      <button>Filter</button>
      <p>Select chart &#8594;</p>
    </Controls>
  )
}

export default ChartData
