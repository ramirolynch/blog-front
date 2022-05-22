import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { BlogContext } from "../Context/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";
import { logInDB } from "../Services/BlogApi";



export function Login() {
    const emailField = useRef<any>("");
    const passwordField = useRef<any>("");
    const [show, setShow] = useState(false);
    const [pass, setPass] = useState(false);
    const { authenticated, loginUser, addUserId } = useContext(BlogContext);
    let location : any = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

  
        
  

    function handleClick(e: any) {
        e.preventDefault();
        if (emailField.current.value.length === 0 || passwordField.current.value.length === 0) {
            setShow(true);
        } else {

        setShow(false);  

        loginUser();
        logInDB(emailField.current.value, passwordField.current.value).then(response => addUserId(response.id)).catch(error => console.log(error));
        setPass(false);
        navigate(from, { replace: true });

        }
    }

    
    return (
        <div>
            <Form className='loginForm'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailField} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordField} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleClick} variant="primary" type="submit">
                    Submit
                </Button>
               
            </Form>

            { show &&
                <Alert variant="danger" onClose={()=> setShow(false)} dismissible>
        
                    <Alert.Heading>Oh snap! You didn't enter an email or password!</Alert.Heading>
                    <p>
                        Please enter both your email and password. Thanks!
                    </p>
                </Alert>
            }
            
            { pass && <Alert variant="danger" onClose={()=> setPass(false)} dismissible>
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

