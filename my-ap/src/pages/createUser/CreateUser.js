import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addData} from "../../store/dataSlice";
import {createUser} from "../../store/fetchSlice";

const CreateUser = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.dataReducer.data);

    const submitData = () => {
        dispatch(createUser(data))
    }

    const changeInput = (e) => {
        const data = {
            name: e.target.name,
            value: e.target.value
        }
        dispatch(addData(data))
    }

    return (
        <div>
            <h1>Create User</h1>
            <div className="row">
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="name"
                            name="name"
                            onChange={changeInput}
                        />
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="username"
                            name="username"
                            onChange={changeInput}
                        />
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Form.Group className="mb-3 w-100">
                        <Form.Control
                            type="text"
                            placeholder="email"
                            name="email"
                            onChange={changeInput}
                        />
                    </Form.Group>
                </div>
                <div className="col-3">
                    <Button onClick={submitData} variant='primary' className="w-100">create user</Button>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;