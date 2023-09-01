import http from "./AxiosContext"

const Createreservation=(data) => { 
    return http.post("/Reservation",data )
}
const getReservationByUserID=(id) => { 
    return http.get(`Reservation/getRsrvByUserId/${id}`) 
}
const getReservationByID=(id) => { 
    return http.get(`Reservation/${id}`) 
}
const deleteReservation=(id) => { 
    return http.delete(`/Reservation/DeleteReservation/${id}`) 
}
const updateReservation=(id , data ) => { 
    return http.put(`/Reservation/UpdateReservation/${id}`, data ) 
}
export default {
    Createreservation,getReservationByUserID,deleteReservation,getReservationByID
    ,updateReservation
}
