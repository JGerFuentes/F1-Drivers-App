import React from 'react'

const LandingPage = ({enterHome}) => {
  return (
    <div>
        <div>Welcome, racer!</div>
        <div>Fasten your seatbelt and...</div>
        <button onClick={enterHome}>LET'S F*** GO!</button>
    </div>)
}

export default LandingPage;