import http from "./AxiosContext"

const getProfileById=(id) => { 
    return http.get(`/profile/${id}`) 
}
const getAllProfiles = () => {
    return http.get("/profile")
}

export default {
    getProfileById,getAllProfiles,
}