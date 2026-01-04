import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { useEffect } from 'react'
import { getAllAdminBookAPI, getAllUsersAPI, updateBookStatusAPI } from '../../services/allAPI'
import serverURL from '../../services/serverURL'
import { ToastContainer, toast } from 'react-toastify';




function AdminCollections() {

  const [tab, setTab] = useState(1)
  const [allBooks, setAllBooks] = useState([])
  const [allUsers, setAllUsers] = useState([])

  console.log(allBooks);

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      if (tab == 1) {
        getAllBooks(token)
      } else if (tab == 2) {
        getAllUsers(token)
      }
    }
  }, [tab])


  const getAllBooks = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllAdminBookAPI(reqHeader)
    if (result.status == 200) {
      setAllBooks(result.data)
    } else {
      console.log(result);
    }
  }

  const getAllUsers = async (token) => {
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await getAllUsersAPI(reqHeader)
    if (result.status == 200) {
      setAllUsers(result.data)
    } else {
      console.log(result);
    }
  }

  const updateBookStatus = async (id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const result = await updateBookStatusAPI(id,reqHeader)
      if(result.status==200){
        toast.success("Book status updated!!!")
        getAllBooks(token)
      }else{
        console.log(result);
        
      }
    }
  }



  return (
    <>
      <AdminHeader />
      <div className='md:grid grid-cols-5'>
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className="my-10 text-center text-2xl font-bold">All Collections</h1>
          {/* tabs */}
          <div className="flex my-5 justify-center items-center">
            <p onClick={() => setTab(1)} className={tab == 1 ? " text-blue-600 font-bold rounded border-t border-l border-r p-3 text-blue-600" : "border-b font-bold border-gray-400 text-xl p-3"}>Books</p>

            <p onClick={() => setTab(2)} className={tab == 2 ? "text-blue-600 font-bold rounded border-t border-l border-r p-3 text-blue-600" : "border-b font-bold border-gray-400 text-xl p-3"}>Users</p>
          </div>
             {/* tab contents */}
          {
            tab == 1 &&
            <div className='md:grid grid-cols-4 w-full my-5'>
              {/* duplicate book card */}
              {
                allBooks?.length > 0 ?
                  allBooks?.map(book => (
                    <div key={book?._id} className="shadow rounded mx-4 p-3 mb-5 md:mb-0">
                      <img height={'300px'} width={'300px'} src={book?.imageURL} alt="book" />
                      <div className="flex justify-center items-center mt-4 flex-col">
                        <h3 className="text-blue-600 font-bold text-lg">{book?.author}</h3>
                        <h4 className="text-lg">{book?.title}</h4>
                        <h4>$ {book?.discountPrice}</h4>
                        <div className='grid mt-3 w-full'>
                         {
                          book?.status !="approved"?
                          <button onClick={()=>updateBookStatus(book?._id)} className='bg-green-600  p-2 text-white'>APPROVE</button>
                          :
                          <img width={'80px'} src="https://cdn-icons-png.flaticon.com/512/5974/5974759.png" alt="check" />
                          }
                          </div>
                      </div>
                    </div>
                  ))
                  :
                  <p>Loading...</p>
              }
            </div>
          }

        {
          tab == 2 &&
          <div className='md:grid grid-cols-3 w-full my-5'>
            {/* duplicate user card */}
            {
              allUsers?.length > 0 ?
                allUsers?.map(user => (
                  <div key={user?._id} className="rounded   bg-gray-200 p-3 m-2  text-wrap">
                    <p className="text-red-600 font-bold text-sm">ID : {user?._id}</p>
                    <div className="flex items-center text-wrap mt-2">
                      {/* user imng */}
                      <img width={'50px'} height={'50px'} style={{ borderRadius: "50%" }} src={user?.picture ? user?.picture.startsWith("https://lh3.googleusercontent.com/") ? user?.picture : `${serverURL}/uploads/${user.picture}` : "https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE="} alt="user" />
                      {/* content */}
                      <div className="ms-5">
                        <h6 className="font-bold text-md">{user?.username}</h6>
                        <p>{user?.email}</p>
                      </div>
                    </div>
                  </div>
                ))
                :
                <p>Loading...</p>
            }
          </div>
        }
      </div>
    </div >
      <Footer />
       <ToastContainer
              position="top-right"
              autoClose={2000}
              theme="colored"
            />
    </>
  )
}

export default AdminCollections