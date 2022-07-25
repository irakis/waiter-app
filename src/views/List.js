import { Button, Row, Col } from 'react-bootstrap';

const List = ({props}) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log('fire!')
    }
    return (
        <Row onClick={handleClick}>
            <Col sm={3} ><b>Table: {props.id}</b></Col>
            <Col sm={6}>
                <p className="m-0"><b>Status:</b>{props.status}</p>
            </Col>
            <Col sm={3} className="mt-2 mb-2">
                <Button variant="primary">Show more</Button>
            </Col>
        </Row>
    )

}
export default List;