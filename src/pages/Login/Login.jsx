import React from 'react'
import './Login.css'

import NavBar from '../../components/NavBar/NavBar'
import LoginCard from '../../components/LoginCard/LoginCard'
import Footer from '../../components/Footer/Footer'

function Login() {
  return (
    <>
      <NavBar />
      <section className="section">
        <LoginCard />
      </section>
      <Footer />
    </>
  )
}

export default Login
