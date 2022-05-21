import { Key, Suspense, useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BlogContext } from "../Context/BlogContext";
import { BlogPost } from "../Models/UserModel";
import { fetchPosts } from "../Services/BlogApi";
import { Post } from "./Post"


export function PostList() {
   
    const [posts, setPosts] = useState<BlogPost[]>([]);
    

    useEffect(() => {
        fetchPosts().then((response) => setPosts(response))

    }, [posts])
    
   
    

    return (
        <div>
        
                {posts.length > 0 ? posts.map((elem, i) => <Post key={i} elem={elem}></Post>) : <h3>Loading...</h3>}
            

        </div>

    );

};