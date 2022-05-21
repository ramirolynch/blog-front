import axios from "axios";

export function fetchPosts() {
  return axios
    .get(`http://localhost:3000/posts`)
    .then((response) => response.data);
}

export function fetchPost(id: number) {
  return axios
    .get(`http://localhost:3000/posts/${id}`, {})
    .then((response) => response.data);
}
