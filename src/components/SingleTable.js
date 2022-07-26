import React from "react";
import { Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { findTable } from "../redux/tablesRedux";
import SelectOption from "../views/SelectOption";

const SingleTable = () => {
    const { tableId } = useParams();
    console.log('tableId:', tableId)
    const currentTable = useSelector(state => findTable(state, tableId))
    console.log('currentTable: ', currentTable);

    return (
        <Row>
            <Col>
                <h1>Single Table menu</h1>
                <FormGroup className='d-flex'>
                    <Form.Label className='m-3'>Status</Form.Label>
                    <SelectOption props={tableId}/>
                </FormGroup>
                <FormGroup className='d-flex m-3'>
                    <Form.Label className='m-3'>People</Form.Label>
                    <Form.Control type="text" className='m-3'>{currentTable.peopleAmount}</Form.Control>  /  <Form.Control type="text" className='m-3'>{currentTable.maxPeople}</Form.Control>
                </FormGroup>
                <FormGroup className='d-flex'>
                    <Form.Label className='m-3'>Bill $</Form.Label>
                    <Form.Control type="text" className='m-3'>{currentTable.bill}</Form.Control>
                </FormGroup>
                <Button variant="primary">Update</Button>
            </Col>
        </Row>

    )
}
export default SingleTable;