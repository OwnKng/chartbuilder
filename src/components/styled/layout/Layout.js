import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"
import SignIn from "../../SignIn"
import SignUp from "../../SignUp"
import CreatedBy from "./CreatedBy"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Header openMenu={setOpen} />
      {open === "signIn" ? <SignIn setOpen={() => setOpen(false)} /> : null}
      {open === "signUp" ? <SignUp setOpen={() => setOpen(false)} /> : null}
      {open === "createdBy" ? (
        <CreatedBy setOpen={() => setOpen(false)} />
      ) : null}
      {children}
      <Footer />
    </>
  )
}

export default Layout
