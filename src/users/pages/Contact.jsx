import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import Header from '../components/Header'
import Footer from '../../components/Footer'

function Contact() {
  return (
    <>
    <Header/>
    <div className='md:px-40 p-5'>
      <div className="text-center my-5">
        <h1 className='text-3xl font-bold mb-5'>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minima saepe rerum consequuntur, nulla libero officia magnam itaque ullam placeat aspernatur sunt voluptatibus assumenda consectetur pariatur at quam modi eos?</p>
      </div>
      <div className="md:flex justify-evenly items-center my-10">
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center"><FaLocationDot/></div>
          <p>123 Main Street, Apt 48, Anytown, CA 91234</p>
        </div>
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center"><FaPhone/>
          </div>
          <p>+91 9123432112</p>
        </div>
        <div className="flex items-center w-75 md:mt-0 mt-5">
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className="flex justify-center items-center"><FaEnvelope/></div>
          <p>contact@bookstore.com</p>
        </div>
      </div>
      <div className="md:grid grid-cols-2 gap-10 md:px-30 mt-5 md:mt-0">
        {/* form*/}
        <div className="bg-gray-200 p-5">
          <div className="text-xl text-center">Send me Message</div>
          <div className="my-3">
            <input placeholder='Name' type="text" className='bg-white p-2 w-full rounded'/>
          </div>
          <div className="my-3">
            <input placeholder='E-Mail' type="text" className='bg-white p-2 w-full rounded' />
          </div>
            <div className="my-3">
            <input placeholder='Message' type="text" className='bg-white p-2 w-full rounded'/>
          </div>
          <div className="my-3">
            <button className="bg-black p-2 w-full text-white flex justify-center">Send</button>
          </div>
        </div>
        {/* map */}
        <div className="mt-5 w-full md:mt-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.55783626531!2d76.35068085!3d10.008816000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1764575424686!5m2!1sen!2sin" width={"100%"} height={"400px" }style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>

    </div>
    <Footer/>

    </>
  )
}

export default Contact