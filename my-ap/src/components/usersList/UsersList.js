import React from 'react';

function UsersList({users}) {
    return (
        <div>
            <ul>
                {users.map((user, key) => <li key={key}>{user}</li>)}
            </ul>
        </div>
    );
}

export default UsersList;