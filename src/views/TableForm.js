import React from 'react';
import { Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getAllOptions } from '../redux/statusRedux';


const TableForm = ({ action, ...props }) => {
    const navigate = useNavigate();
    console.log('props: ', props.data, props.id)

    const [editTable, setEditTable] = useState(props.data || {});

    const allOptions = useSelector(getAllOptions);
    useEffect(() => setEditTable({...editTable, id : props.id}), [editTable.status])

    console.log('editTable: ', editTable)

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ editTable });
        navigate("/", { replace: true })
    }

    return (
        <Row>
            <Col>
                <h1>Table {props.id}</h1>
                <Form onSubmit={handleSubmit} >
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3'>Status</Form.Label>
                        <Form.Select onChange={e => setEditTable({ ...editTable, status: (e.target.value) })}>
                            <option>{editTable.status}</option>
                            {allOptions.map(option => { return <option value={option} key={option}>{option}</option> })}
                        </Form.Select>
                    </FormGroup>
                    <FormGroup className='d-flex m-3'>
                        <Form.Label className='m-3'>People</Form.Label>
                        <Form.Control type="number" className='m-3' value={editTable.peopleAmount || ""} onChange={e => setEditTable({ ...editTable, peopleAmount: (e.target.value) })} />
                        <p>/</p>
                        <Form.Control type="text" className='m-3' 
                            defaultValue={!editTable.maxPeople ? setEditTable({...editTable, maxPeople : '9'}) : editTable.maxPeople} />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3'>Bill $</Form.Label>
                        <Form.Control type="number" className='m-3' value={!editTable.bill ? setEditTable({...editTable, bill : '0'}) : editTable.bill}
                            onChange={e => setEditTable({ ...editTable, bill: (e.target.value) })} />
                    </FormGroup>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </Col>
        </Row>
    )
}

export default TableForm;