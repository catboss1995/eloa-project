import React from 'react'
import "../scss/styleButton.scss"
import arrowIcon from "../assets/images/arrowIcon.svg"
import { Link } from 'react-router-dom'

const ButtonStyle = ({ text}) => {

  return (

    <button type="button" className='button-container'>
      <div className='button-text'>{text}</div>
      <img src={arrowIcon} alt="arrow" className='arrow-icon' />
    </button>

  )
}

export default ButtonStyle