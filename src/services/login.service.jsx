import http from "./AxiosContext";

const signin=(data) => { 
    return http.post("/auth/signin",data )
}  
const signup=(data) => { 
    return http.post("/auth/signup",data )
}
const logout=(data ) => { 
    return http.post("/auth/logout",data )
}

  const updateProfil = (id,data)=>{
    return http.put(`/user/${id}`, data)
  }
  
export default{
    signin,signup,logout,updateProfil
} 