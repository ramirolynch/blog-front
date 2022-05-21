import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BlogPost } from "../Models/UserModel";

export function Post(props: { elem: BlogPost }) {

    let navigate = useNavigate();

    return (
        <div>
            <Card className="mt-3">
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{props.elem.title}</Card.Title>
                    <Card.Text>
                    {props.elem.body}
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{navigate(`posts/${props.elem.id}`)}}>Go to post</Button>
                </Card.Body>
            </Card>
        </div>
        
    );
}