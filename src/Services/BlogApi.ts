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

export function fetchComments(id: number) {
  return axios
    .get(`http://localhost:3000/posts/${id}/comments`, {})
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

// post a comment under a post

export function postComment(body: string, author_id: number, post_id: number) {
  let comment = {
    ...{ body: body },
    ...{ author_id: author_id },
    ...{ post_id: post_id },
  };
  return axios
    .post(`http://localhost:3000/posts/${post_id}/comments`, comment)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}

export function logInDB(email: string, password: string) {
  return axios
    .post(`http://localhost:3000/login`, {
      email: email,
      password: password,
    })
    .then((response) => response.data);
}

export function signUpDB(
  first_name: string,
  last_name: string,
  email: string,
  password: string
) {
  return axios
    .post(`http://localhost:3000/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
