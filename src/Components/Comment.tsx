import moment from "moment";
import { Card } from "react-bootstrap";
import { CommentFace } from "../Models/UserModel";


export function Comment(props:{elem:CommentFace}) {
    return (
        <div>
            <Card className="mt-3">
                <Card.Header>{moment(props.elem.comment_ts).format("MMM Do YY")}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                           {props.elem.body}
                        </p>
                        <footer className="blockquote-footer">
                            by <cite title="Source Title">{props.elem.first_name} {props.elem.last_name}</cite>
                        </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            </div>
    );
}