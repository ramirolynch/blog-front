import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useRef} from "react";

import { toast } from "react-toastify";

export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailField = useRef<any>("");
    const passwordField = useRef<any>("");


  
    const loginError = (msg: any) =>
      toast.error(`${msg}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });

    function handleClick(e: any) {
        e.preventDefault();
    


            console.log("hello")
        
            console.log(emailField.current.value, passwordField.current.value);
    
          setEmail('');
          setPassword('');    
        }
    
    return (
       <div>
         <Form>
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
        </div>
    
    );
}

