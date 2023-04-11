import React from 'react'
import './Login.css'

import LoginCard from '../../components/LoginCard/LoginCard'
import NavBar from '../../components/NavBar/NavBar'

function Login() {
  return (
    <>
      <NavBar />
      <section className="section">
        <LoginCard />
      </section>
    </>
  )
}

export default Login
