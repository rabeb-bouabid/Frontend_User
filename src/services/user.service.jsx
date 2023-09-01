import http from "./AxiosContext"

const getUserById=(id) => { 
    return http.get(`/user/${id}`) 
}

export default {
    getUserById
}