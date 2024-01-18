import axios from "axios"

// const API_URL = '/api/user/'

const register = async (formdata) => {
    const response = await axios.post("http://localhost:4000/api/auth/register", formdata)

    localStorage.setItem("user", JSON.stringify(response.data))

    return response.data
}


// login

const login = async (formdata) => {
    const response = await axios.post("http://localhost:4000/api/auth/login", formdata)
    localStorage.setItem("user", JSON.stringify(response.data))
    return response.data
}

const authService = {
    register,
    login

}
export default authService