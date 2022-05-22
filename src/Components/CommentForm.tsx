import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { BlogContext } from "../Context/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";
import { postComment } from "../Services/BlogApi";
import { BlogPost } from "../Models/UserModel";



export function CommentForm(props:{elem:BlogPost}) {
    const bodyField = useRef<any>("");
    const [show, setShow] = useState(false);
    const [commentPosted, setCommentPosted] = useState(false);
    const { authenticated, loginUser, user_id } = useContext(BlogContext);
    let location : any = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

  
        
  

    function handleClick(e: any) {
        e.preventDefault();
        if (bodyField.current.value.length === 0) {
            setShow(true);
        } 
        else {
            postComment(bodyField.current.value, user_id, props.elem.id)
            setCommentPosted(true);
        }
    }

    
    return (
        <div>
            <Form className="mt-3">
            

                <Form.Group className="mb-3" controlId="formBasicBody">
                    <Form.Label>Type your Comment</Form.Label>
                    <Form.Control ref={bodyField} as="textarea" rows={3} placeholder="Body of Comment" />
                </Form.Group>
            
                <Button onClick={handleClick} variant="primary" type="submit">
                    Submit Comment
                </Button>
               
            </Form>

            { show &&
                <Alert className="mt-3" variant="danger" onClose={()=> setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You didn't enter a title or body!</Alert.Heading>
                    <p>
                        Please enter both your type both title and password. Thanks!
                    </p>
                </Alert>
            }
            { commentPosted &&
                <Alert className="mt-3" variant="success" onClose={()=> setCommentPosted(false)} dismissible>
                    <Alert.Heading>Congrats! Your post was submitted.</Alert.Heading>
                    <p>
                        Make sure you visit home to read your post.
                    </p>
                </Alert>
            }
            

        </div>
    
    );
}