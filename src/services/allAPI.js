import commonAPI from "./commonAPI"
import serverURL from "./serverURL"


//Regiter API: called by Auth component when register btn clicked

export const registerAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/register`,userDetails)

}

//login API: called by Auth component when login btn clicked

export const loginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/login`,userDetails)
}

//google/sign-in google login API: called by Auth component when login using google btn clicked

export const googleLoginAPI = async (userDetails)=>{
    return await commonAPI("POST",`${serverURL}/google/sign-in`,userDetails)
}

// /user/book/add - addbook api : called by sellbook Component when add book btn

export const addBookAPI = async (reqbody,reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/user/book/add`,reqbody,reqHeader)
}

// /books/home: homepage books api : called by home component when page loads
export const getHomePageBooksAPI = async ()=>{
    return await commonAPI("GET",`${serverURL}/books/home`,{})
}


// books/all : bookpage api : called by books component when page loads - authorised user
export const getAllBooksPageAPI = async (reqHeader,searchKey)=>{
    return await commonAPI("GET",`${serverURL}/books/all?search=${searchKey}`,{},reqHeader)
}

// /user-book/all : CALLED By bookstatus when page load 
export const getAllUserBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-books/all`,{},reqHeader)
}

// /user-purchase/book :
export const getUserBroughtBooksAPI = async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-purchase/book`,{},reqHeader)
}

// /books/:id/view : get request by view when page loads
export const viewBookAPI = async (reqHeader,id)=>{
    return await commonAPI("GET",`${serverURL}/books/${id}/view`,{},reqHeader)
}
// /user/:id/edit : put request by Edit when update btn click
export const editUserAPI = async (id,reqBody,reHeader)=>{
    return await commonAPI("PUT",`${serverURL}/user/${id}/edit`,reqBody,reqHeader)
}
