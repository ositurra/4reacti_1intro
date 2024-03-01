import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Badge1=({color,race}) =>{
    return (
        <Stack direction="horizontal" gap={2}>
            <Badge bg={color}>{race}</Badge>
        </Stack>
    );
}

export default Badge1;