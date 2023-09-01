import http from "./AxiosContext"
const getAllPrestataires=() => { 
    return http.get("/prestataire") 
}
const getPrestatiresById=(id) => { 
    return http.get(`/prestataire/${id}`) 
}
const getPrestatiresByService=(id) => { 
    return http.get(`/prestataire/getPrestatireByService/${id}`) 
}
const deletePrestataire=(id ) => { 
    return http.delete(`/prestataire/${id}`) 
}
const updatePrestataire=(id , data ) => { 
    return http.put(`/prestataire/${id}`, data ) 
}
const getFeedback = () => {
    return http.get("/feedback")
}
const CreateFeedback=(data) => {
    return http.post("/feedback",data )
}

const getFeedbackByPrestaId=(id) => { 
    return http.get(`/feedback/getfeedbackByPrestaId/${id}`) 
}

export default { 
    getFeedbackByPrestaId,CreateFeedback,getFeedback,getAllPrestataires,getPrestatiresById
    ,getPrestatiresByService,deletePrestataire,updatePrestataire
}