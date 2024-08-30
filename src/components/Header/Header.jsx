import React from 'react'
import './Header.css'

const Header = ({title}) => {
  return (
    <div className='header'>
        <p>{title}</p>
    </div>
  )
}

export default Header