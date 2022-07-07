import {createSlice} from "@reduxjs/toolkit";

const titleSlice = createSlice({
    name: 'titleSlice',
    initialState: {
        title: "old title",
        input: ""
    },
    reducers: {
        changeTitle(state, action) {
            state.title = "new title"
        },
        clearText(state) {
            state.title = ""
        },
        inputData(state, action) {
            state.input = action.payload
        },
        getTitleFromInput(state, action) {
            state.title = action.payload
            state.input = ""
        }
    }
})

export const {clearText, changeTitle, inputData, getTitleFromInput} = titleSlice.actions
export default titleSlice.reducer