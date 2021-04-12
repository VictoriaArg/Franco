import React, { useState, useEffect } from 'react'
import '../styles/Main.css'
import Cine from '../footage/AutoCine.jpg'
import Estadio from '../footage/Estadio.jpg'
import Arco from '../footage/Arco.jpg'
import Title from '../footage/Title-01.png'
 
function Main() {
  const [pictureNumber, setPictureNumber] = useState(4)
  const randomPicture = () => {
    let roundNumber = Math.floor(Math.random() * 100)
    let numberModule = roundNumber % 3
    setPictureNumber(numberModule)
  }

  const setPicture = () => {
    if (pictureNumber === 4) return <></>
    if (pictureNumber === 0) return Cine
    if (pictureNumber === 1) return Estadio
    if (pictureNumber === 2) return Arco 
  } 

  useEffect(() => {
    randomPicture()
  }, [])

  return (
    <div>
        <div className='heroImg'>
        <img src={setPicture()} alt="Presentación Franco Ferreyra"/>
        </div>
        <div className='heroName'>
            <img src={Title} alt="Franco Ferreyra Arquitecto"/>
        </div>
    </div>
  );
}

export default Main;