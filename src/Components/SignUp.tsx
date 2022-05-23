import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useRef } from "react";
import { BlogContext } from "../Context/BlogContext";
import { useLocation, useNavigate } from "react-router-dom";
import { logInDB, signUpDB } from "../Services/BlogApi";



export function SignUp() {
    const firstNameField = useRef<any>("");
    const lastNameField = useRef<any>("");
    const emailField = useRef<any>("");
    const passwordField = useRef<any>("");
    const passwordRepeateField = useRef<any>("");
    const [show, setShow] = useState(false);
    const [strLength, setStrLength] = useState(false);
    const [pass, setPass] = useState(false);
    const { authenticated, loginUser, addUserId } = useContext(BlogContext);
    let location : any = useLocation();
    let from = location.state?.from?.pathname || "/";
    let navigate = useNavigate();

  
        
  

    function handleClick(e: any) {
        e.preventDefault();
        if (emailField.current.value.length === 0 || passwordField.current.value.length === 0) {
            setShow(true);
        } else if (emailField.current.value.length < 8 || passwordField.current.value.length < 8) {
            setStrLength(true)


        }
            else {
                setShow(false);  
                loginUser();
                signUpDB(firstNameField.current.value, lastNameField.current.value,emailField.current.value, passwordField.current.value).then(response => addUserId(response.id)).catch(error => console.log(error));
                setPass(false);
                navigate(from, { replace: true });
            }
    }

  return (
      <div>
          {/* first name */}
          <Form>
            <Form.Group className="mb-3" controlId="formFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control ref={firstNameField} type="text" placeholder="Enter First Name" />
            <Form.Text className="text-muted">
                Type your first name.
            </Form.Text>
              </Form.Group>
              
          {/* last name */}
            <Form.Group className="mb-3" controlId="formLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control ref={lastNameField} type="text" placeholder="Enter Last Name" />
            <Form.Text className="text-muted">
                Type your last name.
            </Form.Text>
            </Form.Group>
              
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
    
        
        <Form.Group className="mb-3" controlId="formRepeatPassword">
            <Form.Label>Type Your Password Again</Form.Label>
            <Form.Control ref={passwordRepeateField} type="password" placeholder="Type your Password Again" />
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
          
    { strLength && <Alert variant="danger" onClose={()=> setStrLength(false)} dismissible>
      <Alert.Heading>Oh snap! Short email and or password!</Alert.Heading>
      <p>
        Please enter email and password that are at least 8 characters in length!
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
