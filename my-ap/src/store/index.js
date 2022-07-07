import {configureStore} from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import usersReducer from './usersSlice'
import dataReducer from "./dataSlice"
import fetchReducer from "./fetchSlice"

export default configureStore({
    reducer: {
        title: titleReducer,
        users: usersReducer,
        dataReducer: dataReducer,
        fetchReducer: fetchReducer
    }
})