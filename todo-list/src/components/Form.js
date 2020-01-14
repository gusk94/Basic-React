import React from 'react';
import './Form.css';

const Form = ({value, color, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input style={{ color }} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-btn" onClick={onCreate}>
                Add
            </div>
        </div>
    )
}

export default Form;