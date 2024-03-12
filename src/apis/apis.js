import axios from "axios"
export const sendMessage = async (message, token) => {
    await axios.post("http://localhost:8000/api/send-message", message, {headers:{Authorization:token}}).then((res) => {
        console.log(res)
    })
}




export const createProfile = async (userProfile, token) => {
    await axios.post("http://localhost:8000/user/update", userProfile, {headers:{Authorization:token}}).then((res) => {
        console.log(res)
    })
}
