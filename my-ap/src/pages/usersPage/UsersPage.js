import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addUser, clearList, clearUsers, handleName} from "../../store/usersSlice";
import UsersList from "../../components/usersList/UsersList";

function UsersPage(props) {
    const dispatch = useDispatch();
    const name = useSelector(state => state.users.name)
    const users = useSelector(state => state.users.users)

    const handleNameFunc = (e) => {
        dispatch(handleName(e.target.value))
    }
    const addUserFunc = () => {
        dispatch(addUser(name))
        if (name === "") alert('заполните первое поле');
    }
    const clearUserFunc = () => {
        dispatch(clearUsers(name))
    }
    const clearListFunc = (e) => {
        dispatch(clearList(e.target.value))
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleNameFunc} name={name} value={name}/>
                <button onClick={addUserFunc}>create user</button>
                <button onClick={clearUserFunc}>clear user</button>
                ====
                <button onClick={clearListFunc}>clear list</button>
            </div>
            -----------------------------------
            <UsersList users={users}/>
        </div>
    );
}

export default UsersPage;