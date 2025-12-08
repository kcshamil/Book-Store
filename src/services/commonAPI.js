import axios from "axios"
import { data } from "react-router-dom"

const commonAPI = async ( httpMethod,url,reqtBody,reqHeader)=>{
    const reqConfig = {
        method:httpMethod,
        url,
        data:reqtBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
   return await axios(reqConfig).then(res=>res).catch(err=>err)
    



}
export default commonAPI