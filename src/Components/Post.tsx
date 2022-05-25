import { Card, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { BlogPost } from "../Models/UserModel";
import moment from "moment";
import { BlogContext } from "../Context/BlogContext";
import { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deletePost } from "../Services/BlogApi";


export function Post(props: { elem: BlogPost }) {

    let navigate = useNavigate();
    let { user_id } = useContext(BlogContext);

    function handleClick(id: number) {
        deletePost(id); 
    }

    return (
        <div>
            <Card className="mt-3">
                <Card.Header as="h5">{moment(props.elem.post_ts).format("MMM Do YY")}</Card.Header>
                <Card.Body>
                    <Card.Title>{props.elem.title}</Card.Title>
                    <Card.Text>
                    {props.elem.body}
                    </Card.Text>
                    <Card.Text>
                    posted by {props.elem.first_name} {props.elem.last_name}
                    </Card.Text>
                    <Card.Text>
                    {user_id === props.elem.author_id && <RiDeleteBin6Line onClick={()=>handleClick(props.elem.id)} /> }
                    </Card.Text>
                    <Button variant="primary" onClick={()=>{navigate(`posts/${props.elem.id}`)}}>Go to post</Button>
                </Card.Body>
  
            </Card>
        </div>
        
    );
}