import React from 'react';
import { Row, Col, Form, Button, FormGroup, Alert} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import { getAllOptions } from '../redux/statusRedux';
import { useForm } from 'react-hook-form';


const TableForm = ({ action, ...props }) => {
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const [editTable, setEditTable] = useState(props.data || {});
    const allOptions = useSelector(getAllOptions);
    useEffect(() => setEditTable({ ...editTable, id: props.id }), [editTable.status])
    const [ show, setShow ] = useState({status: false , message: ''});

    const handleSubmit = (e) => {
        action({ editTable });
        navigate("/", { replace: true })
    }


    if (show==true) {
        return (
          <Alert variant="danger" onClose={() => setShow({status : false, ...show})} dismissible>
            `${show.message}`
          </Alert>
        );
      }


    return (
        <Row>
            <Col>
                <h1>Table {props.id}</h1>
                <Form onSubmit={validate(handleSubmit)} >
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3 w-50 text-center'>Status</Form.Label>
                        <Form.Select className="m-3" onChange={e => setEditTable({ ...editTable, status: (e.target.value) })}>
                            <option>{editTable.status}</option>
                            {allOptions.map(option => { return <option value={option} key={option}>{option}</option> })}
                        </Form.Select>
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3 w-100 text-center'>People</Form.Label>
                        <Form.Control {...register('value',{ required: true, min: 0, max: `${editTable.maxPeople}` })}
                            type="number" className='m-3 w-65' value={editTable.peopleAmount || ""} onChange={e => setEditTable({ ...editTable, peopleAmount: (e.target.value) })} />
                        <p className='m-3 d-flex justify-content-center w-40'>/</p>

                        {errors.value && setShow({status: true, message: "The value have to be between 0 and" `${editTable.maxPeople}`})}
                        
                        <Form.Control type="text" className='m-3 w-50'
                            defaultValue={!editTable.maxPeople ? setEditTable({ ...editTable, maxPeople: '9' }) : editTable.maxPeople} />
                    </FormGroup>
                    <FormGroup className='d-flex'>
                        <Form.Label className='m-3 w-50 text-center'>Bill $</Form.Label>
                        <Form.Control {...register('bill',{ required: true, min: 0 })} type="number" className='m-3 justify-content-left' value={!editTable.bill ? setEditTable({ ...editTable, bill: '0' }) : editTable.bill}
                            onChange={e => setEditTable({ ...editTable, bill: (e.target.value) })} />

                            {errors.bill && <span className="d-block form-text text-danger mt-2">"The value have to be greater than 0 </span>}
                    </FormGroup>
                    <div className='p-3'>
                        <Button variant="primary" type="submit">Update</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    )
}

export default TableForm;