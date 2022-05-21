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

export function postBlog(title: string, body: number) {
  let blogpost = {
    ...(title !== "" && { title: title }),
    ...{ body: body },
    ...{ author_id: 1 },
  };
  return axios
    .post(`http://localhost:3000/posts`, blogpost)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}
