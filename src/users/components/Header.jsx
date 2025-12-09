import React, { useEffect, useState } from 'react'
import { FaAddressCard, FaBars, FaFacebook, FaInstagram, FaPowerOff, FaTwitter, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'



function Header() {
  const [listStatus,setListStatus] = useState(false)
  const [dp,setDp] = useState("")
  const [token,setToken] = useState("")
  const [dropDown,setDropDown] = useState(false)

useEffect(()=>{
  if(sessionStorage.getItem("token")){
    const userToken = sessionStorage.getItem("token")
    setToken(userToken)
    const user = JSON.parse(sessionStorage.getItem("user"))
    setDp(user.picture)
  }
},[token])

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
      {/* login link */}
      {
        !token ?
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
      :
      <div className="relative inline-block text-left ms-2">
        <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
          <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile picture" />
        </button>
        {
          dropDown &&
          <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
          <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/> Profile</Link>
          <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/> Logout</button>
        </div>
        }
      </div>
      }

    </div>

  </div>
  {/* header lower part - links & menu +login btn */}
  <nav className='w-full p-2 bg-black text-white md:flex justify-center items-center'>
    {/* div - menu bar & login btn */}
    <div className="flex justify-between items-center text-2xl md:hidden">
      {/* menu bar btn */}
      <button onClick={menuBtnClick} className='cursor-pointer'><FaBars/></button>
      {/* login link */}
      {
        !token ?
        <Link to={'/login'} className='ms-4 border rounded py-1 px-2 hover:bg-black hover:text-white flex items-center'><FaUser className='me-1'/>Login</Link>
      :
      <div className="relative inline-block text-left ms-2">
        <button onClick={()=>setDropDown(!dropDown)} className='w-full bg-white px-3 py-2 shadow hover:bg-gray-50'>
          <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="profile picture" />
        </button>
        {
          dropDown &&
          <div className="absolute right-0 z-10 mt-2 w-40 rounded-md bg-white shadow-lg origin-top-right ring-1 ring-black/5 focus:outline-hidden">
          <Link to={'/user/profile'} className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaAddressCard className='me-2'/> Profile</Link>
          <button className='px-4 py-2 text-sm text-gray-700 flex items-center'><FaPowerOff className='me-2'/> Logout</button>
        </div>
        }
      </div>
      }
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