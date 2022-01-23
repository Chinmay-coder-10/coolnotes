import React from 'react'
import "../css/Home.css"
import Herosection from './Herosection'
import Secondsection from './Secondsection'

const Home = () => {
  return (
    <>
      <div class="main">
        <Herosection />
        <Secondsection />
      </div>
    </>
  )
}

export default Home;
