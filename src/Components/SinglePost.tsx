import moment from "moment";
import { Suspense, useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { BlogPost, CommentFace } from "../Models/UserModel";
import { fetchComments, fetchPost } from "../Services/BlogApi";
import { Comment } from "./Comment";
import { CommentForm } from "./CommentForm";


export function SinglePost() {

    const [onePost, setOnePost] = useState<BlogPost>();
    const [comments, setComments] = useState<CommentFace[]>([]);

    let { id } = useParams();


    useEffect(() => {
        fetchPost(Number(id)).then((response) => setOnePost(response));
        fetchComments((Number(id))).then((response) => setComments(response))
        
    }, [onePost, comments]);

    return (
        <div>
            <Card className="mt-3">
                <Card.Header as="h5">{moment(onePost?.post_ts).format("MMM Do YY")}</Card.Header>
                <Card.Body>
                    <Card.Title>{onePost?.title}</Card.Title>
                    <Card.Text>
                        {onePost?.body}
                    </Card.Text>
                </Card.Body>
            </Card>
            
            {onePost && <CommentForm elem={onePost}></CommentForm>}

            {comments.length > 0 ? comments.map((elem, i) => <Comment key={i} elem={elem}></Comment>) : <h3>Enter a new comment.</h3>}
        </div>
        
    );
}