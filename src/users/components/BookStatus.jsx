import React from 'react'

function BookStatus() {
  return (
    <>
       <div className="rounded shadow p-10 mx-5 my-20">
        {/* book div duplicate */}
        <div className="bg-gray-200 p-5 rounded">
            <div className="md:grid grid-cols-[3fr_1fr]">
                <div>
                    <h2 className="text-2xl">Title</h2>
                    <h2 className="text-xl">Author</h2>
                    <h2 className="text-lg text-red-500">$ 400</h2>
                    <p className='text-justify'>Abstract</p>
                    <div className="flex mt-5">
                        {/* pending */}
                        <img src="https://as2.ftcdn.net/v2/jpg/15/42/78/73/1000_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.webp" width={'120px'} alt="" />
                        {/* approved */}
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYDzkOTOgQWniUWQ7wFP-4kim7GkxxnWneg&s" width={'120px'} alt="" />
                        {/* sold */}
                        <img src="https://e7.pngegg.com/pngimages/568/351/png-clipart-computer-icons-sold-out-miscellaneous-text-thumbnail.png" width={'120px'} alt="" />
                    </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                    <img className='w-100' src="/public/The_Discovery_of_India.jpg"  alt="" />
                    <div className='flex justify-end'><button className='p-2 bg-red-500 text-white  mt-5'>DELETE</button></div>
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default BookStatus