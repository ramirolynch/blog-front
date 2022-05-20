import { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef } from "react";
require('dotenv').config()
console.log(process.env)


export function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [classToggle, setClassToggle] = useState<boolean | null>(null);
    const emailField = useRef<any>("");
    const passwordField = useRef<any>("");
    const [show, setShow] = useState(false);

    function AlertDismissibleExample() {
        
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You didn't enter an email or password!</Alert.Heading>
              <p>
                Please enter both your email and password. Thanks!
              </p>
            </Alert>
          );
        }
        return <Button onClick={() => setShow(true)}>Show Alert</Button>;
      }
  

    function handleClick(e: any) {
        e.preventDefault();
        if (emailField.current.value.length === 0 || passwordField.current.value.length === 0) {
            setShow(true);
        } else {
            
            setShow(false);
            console.log(emailField.current.value, passwordField.current.value);
            setEmail('');
            setPassword('');  
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

            <AlertDismissibleExample/>

        </div>
    
    );
}

