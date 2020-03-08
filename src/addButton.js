import React from 'react';
import './css/addBut.css';

const Button = ({ handleAddBut }) => {
    return (
        <div id='addButWrap'>
            <button onClick={handleAddBut}>Add User</button>
        </div>
    )
}

export default Button;