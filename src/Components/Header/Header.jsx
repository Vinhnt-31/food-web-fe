import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header' id='header'>
        <div className='header-content'>
            <h2>
                Order your favourite food here
            </h2>
            <p>Choose from a diverse menu</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header
