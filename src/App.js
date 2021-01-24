import Form from "./components/Form"
import "./App.css"
import Visualisation from "./components/layout/Visualisation"

const App = () => {
  return (
    <div className='app'>
      <div className='header'>Header</div>
      <Visualisation />
      <Form />
      <div className='footer'>footer</div>
    </div>
  )
}

export default App
