import { Suspense, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BlogPost } from "../Models/UserModel";
import { fetchPost } from "../Services/BlogApi";


export function SinglePost() {

    const [onePost, setOnePost] = useState<BlogPost>();

    let { id } = useParams();


    useEffect(() => {
        fetchPost(Number(id)).then((response) => setOnePost(response))
        
    }, [onePost]);

    return (
        <div>
            <Card>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{onePost?.title}</Card.Title>
                    <Card.Text>
                        {onePost?.body}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        
    );
}