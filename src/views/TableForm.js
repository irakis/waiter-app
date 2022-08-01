import React, { useEffect } from 'react';
import { Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import SelectOption from "../views/SelectOption";
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { findTable } from "../redux/tablesRedux";


const TableForm = ({ action }) => {
    const navigate = useNavigate();

    const { tableId } = useParams();

    const table = useSelector(state => findTable(state, tableId));
    console.log('table', table);

    useEffect(()=> {if(table===undefined) {navigate("/", { replace : true }) }}, [table]);
    const [currentTable, setCurrentTable] = useState(table);
    
    console.log('currentTable??: ', currentTable);

    const handleStatus = (props) => {
        setCurrentTable({ ...currentTable, status: props });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ currentTable });
        //setCurrentTable(currentTable);
        navigate("/", { replace: true })
    }


    return (
        <Row>
            <Col>
                <h1>Table {tableId}</h1>
                <Form onSubmit={handleSubmit} >
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3'>Status</Form.Label>
                        <SelectOption action={handleStatus} data={ tableId } />
                    </FormGroup>
                    <FormGroup className='d-flex m-3'>
                        <Form.Label className='m-3'>People</Form.Label>
                        <Form.Control type="number" className='m-3' value={currentTable.peopleAmount || ""} onChange={e => setCurrentTable({ ...currentTable, peopleAmount: (e.target.value) })} />
                        <p>/</p>
                        <Form.Control type="text" className='m-3' defaultValue={currentTable.maxPeople} />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3'>Bill $</Form.Label>
                        <Form.Control type="number" className='m-3' value={currentTable.bill}
                            onChange={e => setCurrentTable({ ...currentTable, bill: (e.target.value) })} />
                    </FormGroup>
                    <Button variant="primary" type="submit">Update</Button>
                </Form>
            </Col>
        </Row>



    )
}

export default TableForm;