import React from 'react'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FaBackward } from 'react-icons/fa'

function PaymentError() {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex justify-center items-center md:px-20 px-5">
        <div className="md:grid grid-cols-2 gap-10 items-center">
            <div>
                <h1 className="md:text-4xl text-red-600">Sorry!!! Payment Failed...</h1>
                <h2 className="my-10 md:text-xl">We appologize for the incoviene caused and appreciate your visit to BookStore...</h2>
                <Link to={'/books'} className='flex items-center bg-red-600 p-2 w-60 text-white'>
                <FaBackward className='me-3'/>Explore More Books!!!</Link>
            </div>
            <div>
                <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt="payment error" />
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default PaymentError