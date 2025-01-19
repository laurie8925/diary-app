import React, { useState } from 'react'
import Pot from "../assets/empty pot.png"
import FlowerData from "../datas/flower.json"

const flower = ({ savedText, flowerIndex }) => {
    const flowerImage = `/assets/${FlowerData[flowerIndex % FlowerData.length]}.png`;  return (
    <div className="flower">
        {/* <img src={Pot} alt="Flower pot" width="200px" /> */}
        {savedText && <img src={flowerImage} alt="Flower" width="200px" />}
        <p>{savedText}</p>
    </div>
  )
}

export default flower