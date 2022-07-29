import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { getAllOptions } from '../redux/statusRedux';
import { useState } from 'react';
import { findTable } from '../redux/tablesRedux';

function SelectOption({ tableId , action }) {
    console.log(tableId);
    const allOptions = useSelector(getAllOptions);
    const currentStatus = useSelector(state => findTable(state, tableId));
    const [status, setState] = useState(currentStatus);
    
    useEffect(()=> action(status), [status]);

    return (
        <Form.Select onChange={e => setState(e.target.value)}>
                {allOptions.map(option => {
                    return <option value={option} key={option}>{option}</option>
                        }
                    )
                }
        </Form.Select>
    )
}

export default SelectOption;