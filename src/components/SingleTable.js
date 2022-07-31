import React from "react";
import { useDispatch } from 'react-redux';
import { fetchUpdateRequest} from "../redux/tablesRedux";
import Spinner from 'react-bootstrap/Spinner';
import TableForm from '../views/TableForm';

const SingleTable = () => {
    const dispatch = useDispatch()

    const handleSubmit = ({currentTable}) => {
        dispatch(fetchUpdateRequest({ currentTable }));

        if (!{ currentTable }) return (
            <div className="d-flex justify-content-center">
                <Spinner variant="primary" animation="border" role="status" />
            </div>
        )
    }

    return (
        <TableForm action={handleSubmit} />
    )
}
export default SingleTable;