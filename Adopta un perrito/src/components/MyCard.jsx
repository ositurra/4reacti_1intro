import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard =({url,title,description,race}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary">{race}</Button>
            </Card.Body>
        </Card>
    );
}

export default MyCard;