import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getOnePostById, getPost} from "../../store/fetchSlice";

function PostsPage() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.fetchReducer.posts);
    const poster = useSelector(state => state.fetchReducer.post)

    useEffect(() => {
        dispatch(getPost())
    }, [])
    const getOnePost = (e) => {
        e.preventDefault()
        // console.log(e.target.dataset.id)
        dispatch(getOnePostById(e.target.dataset.id))
    }

    return (
        <div>
            <h1>Users</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                    <th>Действие</th>
                </tr>
                </thead>
                <tbody>
                {poster.map(post =>
                    <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>
                            <button data-id={post.id} onClick={getOnePost}>
                                посмотреть
                            </button>
                        </td>
                    </tr>)}
                </tbody>
            </Table>
        </div>
    );
}

export default PostsPage;