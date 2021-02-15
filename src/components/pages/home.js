import Form from "../styled/layout/form/Form"
import Visualisation from "../styled/layout/visualisation/Visualisation"
import styled from "styled-components"

const Home = ({ className }) => (
  <div className={className}>
    <Visualisation className='viz' />
    <Form className='form' />
  </div>
)

export default styled(Home)`
  display: grid;
  width: 95vw;
  height: 85vh;
  margin: 10px auto;
  grid-template-areas: "viz form";
  grid-template-columns: 2fr 1fr;

  .viz {
    grid-area: viz;
  }

  .form {
    grid-area: form;
  }

  grid-gap: 5px;

  justify-content: center;

  @media only screen and (max-width: 1024px) {
    max-width: 1000px;
    height: auto;
    grid-template-areas: "viz" "form";
    grid-template-columns: 1fr;
  }
`
