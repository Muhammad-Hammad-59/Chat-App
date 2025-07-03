import { userApi } from "./axiosConfig";



export const loginUser = async (formData) => {
    const response = await userApi.post('/login' , formData)
    console.log("Login response:", response);
    return response.data
}


export const registerUser = async (formData) => {
    const response = await userApi.post('/register' , formData)
    return response.data
}