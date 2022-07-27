import React from "react";
import { Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { findTable } from "../redux/tablesRedux";
import SelectOption from "../views/SelectOption";
import { useState } from "react";

const SingleTable = () => {
    const { tableId } = useParams();
    const table = useSelector(state => findTable(state, tableId))
    const [currentTable, setCurrentTable] = useState(table);
    console.log(currentTable);

    const handleStatus = (props) => {
        setCurrentTable({...currentTable, status: props});
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('fire submit!!!')
    }
    return (
        <Row>
            <Col>
                <h1>Single Table menu</h1>
                <Form onSubmit={handleSubmit} >
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3'>Status</Form.Label>
                        <SelectOption props={currentTable.status} action={handleStatus}/>
                    </FormGroup>
                    <FormGroup className='d-flex m-3'>
                        <Form.Label className='m-3'>People</Form.Label>
                        <Form.Control type="number" className='m-3' value={currentTable.peopleAmount} onChange={e => setCurrentTable({ ...currentTable, peopleAmount: (e.target.value) })} />
                        <p>/</p>
                        <Form.Control type="text" className='m-3' defaultValue={currentTable.maxPeople} />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3'>Bill $</Form.Label>
                        <Form.Control type="number" className='m-3' value={currentTable.bill}
                            onChange={e => setCurrentTable({ ...currentTable, bill: (e.target.value) })} />
                    </FormGroup>
                    <Button variant="primary" >Update</Button>
                </Form>
            </Col>
        </Row>

    )
}
export default SingleTable;