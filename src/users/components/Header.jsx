import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'


function Header() {
  const [listStatus,setListStatus] = useState(false)

  const menuBtnClick=()=>{
    setListStatus(!listStatus)
  }
  return (
    <>
  {/* header upper part - title & login */}
  <div className="grid grid-col-3 p-3">
    {/* logo with title */}
    <div className="flex items-center">
      <img width={'60px'} height={'60px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ZsVIZ0OgVuQE3-dKqvdGNAn7Edj3aTfimw&s" alt="logo" />
      <h1 className="text-2xl  font-bold ms-1 md:hidden">BOOKSTORE</h1>
    </div>
    {/* title */}
    <div className="md:flex justify-center items-center hidden">
      <h1 className="text-3xl font-bold">BOOK STORE</h1>
    </div>
    {/* login */}
    <div className="md:flex justify-end items-center hidden">
      {/* insta,facebook,twitter */}
      <FaInstagram/>
      <FaFacebook/>
      <FaTwitter/>
      <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>

    </div>

  </div>
  {/* header lower part - links & menu +login btn */}
  <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
    {/* div - menu bar & login btn */}
    <div className="flex justify-between items-center text-2xl md:hidden">
      {/* menu bar btn */}
      <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
      {/* login link */}
      <Link to={'/login'} className='ms-4 border rounded px-2 py-1 hover:bg-white hover:text-black flex items-center'><FaUser className='me-1'/>Login</Link>
    </div>
    {/* ul - links */}
    <ul className={listStatus?"flex flex-col":"md:flex justify-center items-center hidden"}>
      <li><Link to={'/'} className='md:mx-4 mt-3 md:mt-0'>HOME</Link></li>
      <li><Link to={'/books'} className='md:mx-4 mt-3 md:mt-0'>BOOKS</Link></li>
      <li><Link to={'/contact'} className='md:mx-4 mt-3 md:mt-0'>CONTACT</Link></li>
    </ul>
  </nav>
    
    </>
  )
}

export default Header