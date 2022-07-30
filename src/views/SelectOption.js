import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { getAllOptions } from '../redux/statusRedux';
import { useState } from 'react';
import { findTable } from '../redux/tablesRedux';


function SelectOption( {action, data}) {
    const allOptions = useSelector(getAllOptions);
    const currentStatusTable = useSelector(state => findTable(state, data));
    const [status, setState] = useState(currentStatusTable.status);
    
    useEffect(()=>action(status), [status]);

    return (
        <Form.Select onChange={e => setState(e.target.value)}>
            <option>{currentStatusTable.status}</option>
                {allOptions.map(option => {
                    return <option value={option} key={option}>{option}</option>
                        }
                    )
                }
        </Form.Select>
    )
}

export default SelectOption;