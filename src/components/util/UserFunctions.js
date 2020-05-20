import axios from "axios"

export const register = newUser => {
  return axios
    .post("http://localhost:8000/auth/signup", {
      name: newUser.name,
      password: newUser.password,
    })
    .then(res => console.log("User registered"))
    .catch(err => console.log(err))
}

export const login = user => {
  return axios
    .post("http://localhost:8000/auth/login", {
      name: user.name,
      password: user.password,
    })
    .then(res => {
      localStorage.setItem("user_token", res.data)
      console.log("Logged in succesful", res)
      return res.data
    })
    .catch(err => console.log(err))
}
