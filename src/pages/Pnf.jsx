import React from 'react'
import { Link } from 'react-router-dom'


function Pnf() {
  return (
  <div>
      <div className='flex justify-center items-center min-h-screen flex-col'  >
        <img width={'500px'}  className='' src="public/pnf.png" alt="" />
        <p className='text-center font-bold'> Ohhh!! Noo!!</p>
        <h4 className='text-3xl font-bold'>Look Like You're Lost</h4>
        <p className='text-center text-2xl font-bold'> The page you are looking for is not available</p>
        <Link className='p-3  rounded bg-black text-white' to={'/'}>BACK TO HOME</Link>
        


      </div>
      
  </div>
    
  )
}

export default Pnf