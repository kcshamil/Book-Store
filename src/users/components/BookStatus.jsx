import React, { useEffect, useState } from 'react'
import { getAllUserBooksAPI } from '../../services/allAPI'; // ✅ correct import



function BookStatus() {

    const [userBooks, setUserBooks] = useState([])
    console.log(userBooks);

    useEffect(() => {
        getUserUploadBooks()
    }, [])

    const getUserUploadBooks = async () => {
        const token = sessionStorage.getItem("token")
        if (token) {
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }
            const result = await getAllUserBooksAPI(reqHeader)
            if (result.status == 200) {
                setUserBooks(result.data)
            } else {
                console.log(result);

            }
        }
    }

    return (
        <>
            <div className="rounded shadow p-10 mx-5 my-20">
                {/* book div duplicate */}
                {
                    userBooks?.length > 0 ?
                        userBooks?.map(book => (
                            <div className="bg-gray-200 p-5 rounded">
                                <div className="md:grid grid-cols-[3fr_1fr]">
                                    <div>
                                        <h2 className="text-2xl">{book?.title}</h2>
                                        <h2 className="text-xl">{book?.author}</h2>
                                        <h2 className="text-lg text-red-500">$ {book?.discountPrice}</h2>
                                        <p className='text-justify'>{book?.abstract}</p>
                                        <div className="flex mt-5">
                                            {/* pending */}
                                            
                                            {/* approved */}
                                            
                                            {/* sold */}
                                            
                                            {
                                                book?.status=="pending" ?
                                                <img src="https://as2.ftcdn.net/v2/jpg/15/42/78/73/1000_F_1542787314_EJF9wn3UH9Nd8BvShQ6VSKKYgaSQByuS.webp" width={'120px'} alt="" />
                                                : book?.status=="approved" ?
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYDzkOTOgQWniUWQ7wFP-4kim7GkxxnWneg&s" width={'120px'} alt="" />
                                                :
                                                <img src="https://e7.pngegg.com/pngimages/568/351/png-clipart-computer-icons-sold-out-miscellaneous-text-thumbnail.png" width={'120px'} alt="" />

                                            }
                                        </div>
                                    </div>
                                    <div className="px-4 mt-4 md:mt-0">
                                        <img className='w-100' src={book?.imageURL} alt="" />
                                        <div className='flex justify-end'><button className='p-2 bg-red-500 text-white  mt-5'>DELETE</button></div>
                                    </div>
                                </div>
                            </div>
                        ))
                        :
                        <div className="text-center my-5 font-bold">
                            Books are not uploaded yet!!!
                        </div>
                }
            </div>
        </>
    )
}

export default BookStatus