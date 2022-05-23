import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { BlogContext } from "../Context/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";
import { postBlog } from "../Services/BlogApi";



export function PostForm() {
    const titleField = useRef<any>("");
    const bodyField = useRef<any>("");
    const [show, setShow] = useState(false);
    const [blogPosted, setBlogPosted] = useState(false);
    const { user_id } = useContext(BlogContext);
    let location : any = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

  
        
  

    function handleClick(e: any) {
        e.preventDefault();
        if (titleField.current.value.length === 0 || bodyField.current.value.length === 0) {
            setShow(true);
        } 
        else {
            postBlog(titleField.current.value, bodyField.current.value, user_id);
            setBlogPosted(true);

        }
    }

    
    return (
        <div>
            <Form className="mt-3">
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={titleField} type="text" placeholder="Enter title" />
                    <Form.Text className="text-muted">
                        This is the title of your post.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBody">
                    <Form.Label>Body of Post</Form.Label>
                    <Form.Control ref={bodyField} as="textarea" rows={3} placeholder="Body of Post" />
                </Form.Group>
            
                <Button onClick={handleClick} variant="primary" type="submit">
                    Submit Post
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
            { blogPosted &&
                <Alert className="mt-3" variant="success" onClose={()=> setBlogPosted(false)} dismissible>
                    <Alert.Heading>Congrats! Your post was submitted.</Alert.Heading>
                    <p>
                        Make sure you visit home to read your post.
                    </p>
                </Alert>
            }
            

        </div>
    
    );
}

