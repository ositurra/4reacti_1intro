import Card from 'react-bootstrap/Card';
import Badge1 from "./Tags"

const MyCard = ({ url, title, description, color, race }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <div className="badge-container">
                <Badge1 color={color} race={race} />
            </div>
        </Card>
    );
}

export default MyCard;