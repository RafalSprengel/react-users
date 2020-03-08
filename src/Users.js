import React from 'react';
import './css/Users.css';

const Users = ({ user }) => {
    let users = user.map(user => (
        <div id='user' key={user.login.uuid}>
            <hr />
            <img src={user.picture.large} alt='pic' />
            <br />
            <h4>{user.name.title} <strong>{user.name.first}</strong></h4>
            <br />
            <h4>{user.email}</h4>
        </div >
    )
    )

    return (
        <>
            {users}
        </>
    )
}

export default Users;