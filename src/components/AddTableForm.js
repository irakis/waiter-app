import React from "react";
import TableForm from "../views/TableForm";
import { useDispatch, useSelector } from "react-redux";
import { getNumberOfTables } from "../redux/statusRedux";
import { fetchAddRequest } from "../redux/tablesRedux";
import Spinner from 'react-bootstrap/Spinner';

const AddTableForm = () => {
    const dispatch = useDispatch();
    const newTableNumber = useSelector(state => getNumberOfTables(state));
    const tableId = `${(newTableNumber + 1)}`

    const handleSubmit = ({ editTable }) => {
        dispatch(fetchAddRequest({ editTable }))

        if (!{ editTable }) return (
            <div className="d-flex justify-content-center">
                <Spinner variant="primary" animation="border" role="status" />
            </div>
        )
    }

    return (
        <div>
            <h1>Add Table here.</h1>
            <TableForm action={handleSubmit} id={tableId} />
        </div>
    );
}
export default AddTableForm