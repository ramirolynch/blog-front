import { Key, useContext, useEffect, useState } from "react";
import { BlogContext } from "../Context/BlogContext";
import { fetchPosts } from "../Services/BlogApi";
import { Post } from "./Post"


export function PostList() {
   
    const [posts, setPosts] = useState<any[]>([]);
    

    useEffect(() => {
        fetchPosts().then((response) => setPosts(response))

    }, [posts])
    
   
    

    return (
        <div>

            {posts.length > 0 ? posts.map((elem, i) => <Post key={i} elem={elem}></Post>) : <h3>No Posts Were Found.</h3>}

        </div>

    );

};