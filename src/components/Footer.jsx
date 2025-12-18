import React from 'react'
import { FaArrowRight, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <>
      <div className="md:grid grid-cols-3 md:gap-9 bg-black text-white p-10">
        <div>
          <h4 className='font-bold'>ABOUT US</h4>
          <p className='text-justify mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint in voluptatum exercitationem earum dignissimos perspiciatis labore magnam incidunt, perferendis cumque tempore iure totam doloribus eveniet excepturi. Error, fugiat rerum!
            Sit sed corrupti molestias animi? Dolores nostrum vitae nam dolorum modi. 
          </p>
        </div>
        <div >
          <h4 className='font-bold'>NEWS LETTER</h4>
          <p className='my-5'>Stay updated with our latest trends</p>
          <div className="flex">
            <input type="text" placeholder=' Email Id here' className='p-2 bg-white placeholder-gray-400 text-black' />
            <button className='p-2 bg-yellow-500'><FaArrowRight /></button>
          </div>
        </div>
        <div className="md:ms-40">
          <h1 className="font-bold">FOLLOW US</h1>
          <p className="my-5">Let us be social</p>
          <div className="flex items-center gap-5 text-xl cursor-pointer">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaEnvelope />
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer