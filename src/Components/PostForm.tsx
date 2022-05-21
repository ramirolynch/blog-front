import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { BlogContext } from "../Context/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";



export function PostForm() {
    const titleField = useRef<any>("");
    const bodyField = useRef<any>("");
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState(false);
    const { authenticated, loginUser } = useContext(BlogContext);
    let location : any = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

  
        
  

    // function handleClick(e: any) {
    //     e.preventDefault();
    //     if (emailField.current.value.length === 0 || passwordField.current.value.length === 0) {
    //         setShow(true);
    //     } else {

    //         setShow(false);
            
    //         console.log(emailField.current.value, passwordField.current.value);
    //         if (process.env.REACT_APP_EMAIL === emailField.current.value && process.env.REACT_APP_PASSWORD === passwordField.current.value) {
    //             loginUser();
    //             setPass(false);
    //             navigate(from, { replace: true });
    //         }

    //         else {
    //             setPass(true);
    //         }

         
    //     }
    // }

    
    return (
        <div>
            <Form>
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
            
                <Button variant="primary" type="submit">
                    Submit Post
                </Button>
               
            </Form>

            { show &&
                <Alert variant="danger">
                    <Alert.Heading>Oh snap! You didn't enter an email or password!</Alert.Heading>
                    <p>
                        Please enter both your email and password. Thanks!
                    </p>
                </Alert>
            }
            
            { pass && <Alert variant="danger">
              <Alert.Heading>Oh snap! You didn't enter a valid email or password!</Alert.Heading>
              <p>
                Please enter a valid email and password. Thanks!
              </p>
            </Alert>}
            
            { authenticated && <Alert variant="success">
              <Alert.Heading>You are logged in!</Alert.Heading>
              <p>
                Feel free to browse this website.
              </p>
            </Alert> }

        </div>
    
    );
}

