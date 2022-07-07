import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
    "createUser",
    async function(form) {
        const options = {
            method: "POST",
            header: {
                "Content-Type": "application-json"
            },
            body: JSON.stringify(form)
        }
        const response = await fetch('https://jsonplaceholder.typicode.com/users', options);

        if(response.status === 201) {
            alert("success")
        }
        else if (response.status === 404) {
            alert("error")
        }
    }
)

export const getPost = createAsyncThunk(
    "getPost",
    async function(data,{dispatch}) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json();
        dispatch(getPostsAction(posts))
    }
)
export const getOnePost = createAsyncThunk(
    'getOnePost',
    async (data, {dispatch}) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${+data}`)
        const pos = await  res.json()
        dispatch(getOnePostById(pos))
}
)

const fetchSlice = createSlice({
    name: "fetchSlice",
    initialState: {
        posts: [],
        post: {
            title: "",
            body: ""
        }
    },
    reducers: {
        getPostsAction(state, action) {
            state.posts = action.payload
        },
        getOnePostById(state, action){
            state.post = action.payload
        }
    }
})

export const {getPostsAction, getOnePostById} = fetchSlice.actions;
export default fetchSlice.reducer