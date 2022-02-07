import React from 'react'
import "../css/Home.css"
import Footersection from './Footersection'
import Herosection from './Herosection'
import Secondsection from './Secondsection'

const Home = () => {
  return (
    <>
      <div class="main">
        <Herosection />
        <Secondsection />
        <Footersection/>
      </div>
    </>
  )
}

export default Home;
