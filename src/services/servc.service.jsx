import http from "./AxiosContext";
const getAllServices=() => { 
    return http.get("/Services") 
}
const getServicesById=(id) => { 
    return http.get(`Services/GetServiceById/${id}`) 
}
const deleteService=(id ) => { 
    return http.delete(`/Services/DeleteService/${id}`) 
}
const updateService=(id , data ) => { 
    return http.put(`/Services/${id}`, data ) 
}
export default {
    getAllServices, getServicesById ,deleteService,updateService
}