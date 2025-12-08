import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//Regiter API: called by Auth component when register btn clicked

export const registerAPI = async (reqtBody)=>{
    return await commonAPI("POST",`${serverURL}`/register,userDetails)

}