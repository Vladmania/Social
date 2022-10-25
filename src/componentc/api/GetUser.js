import * as axios from 'axios'

const baseUrl = `https://social-network.samuraijs.com/api/1.0/`

const instans = axios.create({
    withCredentials: true,
    baseUrl: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "178eab58-ef03-48d3-bd17-ec98621777f0"
    }
})

export const getUser = (currentPage, pageSize)=>{
    return axios.get( baseUrl +`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true
    })
}

export const getUnFollow = (id)=>{
    return instans.delete(`follow/${id}`)
}

export const getFollow = (id)=>{
   return axios.post(baseUrl + `follow/${id}`, {}, {
                        withCredentials: true,
                        headers: {
                            "API-KEY": "178eab58-ef03-48d3-bd17-ec98621777f0"
                        }})
}