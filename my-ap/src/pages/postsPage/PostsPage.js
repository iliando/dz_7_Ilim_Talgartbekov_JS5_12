import React, {useEffect} from 'react';
import {Table} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {getPost} from "../../store/fetchSlice";

function PostsPage() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.fetchReducer.posts);

    useEffect(() => {
        dispatch(getPost())
    }, [])

    const getOnePost = (e) => {
        e.preventDefault()
        console.log(e.target.dataset.id)
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
                {posts.slice(0, 10).map(post =>
                    <tr>
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

            <ul>
                <li>title: dasd</li>
                <li>body: asdasd</li>
            </ul>
        </div>
    );
}

export default PostsPage;