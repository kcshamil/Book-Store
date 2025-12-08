import React from 'react'
import { FaArrowRight,FaEnvelope,FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className="md:grid grid-cols-3 md:gap-9 bg-black text-white p-10">
      <div>
        <h4 className='font-bold'>ABOUT US</h4>
        <p className='text-justify mt-5'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint in voluptatum exercitationem earum dignissimos perspiciatis labore magnam incidunt, perferendis cumque tempore iure totam doloribus eveniet excepturi. Error, fugiat rerum!
          Sit sed corrupti molestias animi? Dolores nostrum vitae nam dolorum modi. Cum earum explicabo fugit soluta corporis aperiam laboriosam officia cumque, aliquam ipsam maiores! Impedit doloremque saepe aliquid odit et.
          Corporis,
        </p>
      </div>
      <div >
        <h4 className='font-bold'>NEWS LETTER</h4>
        <p className='my-5'>Stay updated with our latest trends</p>
        <div className="flex">
          <input type="text" placeholder=' Email Id here' className='p-2 bg-white placeholder-gray-400 text-black'  />
          <button className='p-2 bg-yellow-500'><FaArrowRight/></button>
        </div>
      </div>
      <div className="md:ms-40">
        <h1 className="font-bold">FOLLOW US</h1>
        <p className="my-5">Let us be social</p>
        <div className="flex">
          <FaFacebook/>
          <FaInstagram className='mx-5'/>
          <FaTwitter className='mx-5'/>
          <FaEnvelope/>          
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer