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
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`
