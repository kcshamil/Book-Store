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