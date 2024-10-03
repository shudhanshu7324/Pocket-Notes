import React from 'react'
import { IoMdLock } from "react-icons/io";
import './Css/Home.css'


const Home = ({modal}) => {
  return (
    <div className="right" >
        <div className="right-wrapper">
          <img className="home-image" src="/home.png" alt="home-img" />
          <h1>Pocket Notes</h1>
          <p>
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <div className="footer">
          <span><IoMdLock /> end-to-end encrypted</span>
        </div>
      </div>
  )
}

export default Home
