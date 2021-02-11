import Form from "../styled/layout/form/Form"
import Visualisation from "../styled/layout/visualisation/Visualisation"
import styled from "styled-components"

const Home = ({ className }) => (
  <div className={className}>
    <Visualisation />
    <Form />
  </div>
)

export default styled(Home)`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`
