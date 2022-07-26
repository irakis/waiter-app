import React from 'react';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { getAllOptions } from '../redux/statusRedux';

function SelectOption({props}) {
    console.log(props);
    const allOptions = useSelector(getAllOptions);
    console.log('allOptions',allOptions);
    return (
        <Form.Select>
            <option>{props}</option>
                {allOptions.map(option => {
                    return (<option>option</option>)
                        }
                    )
                }
        </Form.Select>
    )
}

export default SelectOption;