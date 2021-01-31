import Form from "../styled/layout/Form"
import Visualisation from "../styled/layout/Visualisation"
import styled from "styled-components"

const Home = ({ className }) => (
  <div className={className}>
    <Visualisation />
    <Form />
  </div>
)

export default styled(Home)`
  display: grid;
  grid-template-areas: "visualisation form";
  grid-template-columns: 64vw 35vw;
  grid-template-rows: 85vh;
  justify-content: center;
`
