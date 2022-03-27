import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.style.css'

function Home() {
  const navigate = useNavigate()
  const backSound = new Audio(require('../audio/sound_back.wav'))
  return (
    <section className="section-1 center">
      <h1 className="section-1-heading">Project Manager</h1>
      <img src={require("../images/eric-karim.jpg")} alt="" className="person-img" />
      <h3 className="person-name animated" onClick={() => {
        backSound.play()
        navigate('/project')
      }}>John Doe</h3>
    </section>
  )
}

export default Home