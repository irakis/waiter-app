import React from 'react';
import { Row, Col, Form, Button, FormGroup } from "react-bootstrap";
import SelectOption from "../views/SelectOption";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from "react";
import { findTable } from "../redux/tablesRedux";


const TableForm = ({ action }) => {

    const emptyTable = {
        id: "",
        peopleAmount: "0",
        maxPeople: "9",
        status: "Free",
        bill: "0"
    };

    const { tableId } = useParams();
    const table = useSelector(state => findTable(state, tableId));
    const [currentTable, setCurrentTable] = useState(table==undefined ? emptyTable : table);

    console.log('currentTable??: ', currentTable);
    console.log({ tableId });

    const handleStatus = (props) => {
        setCurrentTable({ ...currentTable, status: props });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        action({ currentTable });
        setCurrentTable(currentTable);
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