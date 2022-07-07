import {createSlice} from "@reduxjs/toolkit";
import titleSlice from "./titleSlice";

const usersSlice = createSlice({
    name: "usersSlice",
    initialState: {
        users: [],
        name: ""
    },
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload]
        },
        handleName(state, action) {
            state.name = action.payload
        },
        clearList(state) {
            state.users = []
        },
        clearUsers(state) {
            state.name = ''
        }
    }
})

export const {addUser, handleName, clearUsers, clearList} = usersSlice.actions
export default usersSlice.reducer