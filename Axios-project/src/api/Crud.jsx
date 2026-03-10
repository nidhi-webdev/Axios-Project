import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})

// get Method
export const getApi = () => {
  return api.get("/posts")
}

// delete Method
export const deleteApi = (id) => {
  return api.delete(`/posts/${id}`)
}

// post Method
export const postApi = (FrontendData) => {
  return api.post("/posts", FrontendData)
}

// Update Method
export const updateApi = (id, post) => {
  return api.put(`/posts/${id}`, post)
}