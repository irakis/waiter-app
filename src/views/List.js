import { Button, Form, Row, Col } from 'react-bootstrap';

const List = (props) => {
    const handleClick = () => {
        console.log('fire!')
    }
    return (
        <Row onClick={handleClick}>
            <Col>{props}</Col>
            <Col>
                <Form.Select size="lg">Status:
                    <option>Large select</option>
                </Form.Select></Col>
            <Col>
                <Button variant="primary">Show more</Button>
            </Col>
        </Row>
    )

}
export default List;