import axios from "axios";

export function fetchPosts() {
  return axios
    .get(`https://blog-alpha-rosy-82.vercel.app/posts`)
    .then((response) => response.data);
}

export function fetchPost(id: number) {
  return axios
    .get(`https://blog-alpha-rosy-82.vercel.app/posts/${id}`, {})
    .then((response) => response.data);
}

export function fetchComments(id: number) {
  return axios
    .get(`https://blog-alpha-rosy-82.vercel.app/posts/${id}/comments`, {})
    .then((response) => response.data);
}

export function postBlog(title: string, body: string, author_id: number) {
  let blogpost = {
    ...(title !== "" && { title: title }),
    ...{ body: body },
    ...{ author_id: author_id },
  };
  return axios
    .post(`https://blog-alpha-rosy-82.vercel.app/posts`, blogpost)
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}

// edit blog post
export function editBlog(id: number, title: string, body: string) {
  return axios
    .put(`https://blog-alpha-rosy-82.vercel.app/posts/${id}`, {
      title: title,
      body: body,
    })
    .then((response) => response.data);
}

// post a comment under a post

export function postComment(body: string, author_id: number, post_id: number) {
  let comment = {
    ...{ body: body },
    ...{ author_id: author_id },
    ...{ post_id: post_id },
  };
  return axios
    .post(
      `https://blog-alpha-rosy-82.vercel.app/posts/${post_id}/comments`,
      comment
    )
    .then((response) => response.data)
    .catch((error) => console.log(error.response.data));
}

// delete a post by its id
export function deletePost(id: number) {
  return axios
    .delete(`https://blog-alpha-rosy-82.vercel.app/posts/${id}`, {})
    .then((response) => response.data);
}

export function logInDB(email: string, password: string) {
  return axios
    .post(`https://blog-alpha-rosy-82.vercel.app/login`, {
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
    .post(`https://blog-alpha-rosy-82.vercel.app/signup`, {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    })
    .then((response) => response.data)
    .catch((error) => console.log(error));
}
