import http from "./AxiosContext";


const ContactUs=(data) => { 
    return http.post("/contact",data )
}
const getcontacts=() => { 
    return http.get("/contact") 

}
export default { 
    getcontacts ,ContactUs
}