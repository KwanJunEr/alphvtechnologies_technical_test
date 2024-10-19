import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='bg-blue-400 flex flex-row w-full justify-between px-6 py-3'>
      <h1>Shapes Portal</h1>
      <FaRegUserCircle size={30}/>
    </div>
  )
}

export default Header
