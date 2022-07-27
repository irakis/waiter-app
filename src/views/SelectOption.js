import React, { useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { getAllOptions } from '../redux/statusRedux';
import { useState } from 'react';

function SelectOption({ props , action }) {
    const allOptions = useSelector(getAllOptions);
    const [status, setState] = useState(props);
    
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