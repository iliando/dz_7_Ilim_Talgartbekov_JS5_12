import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeTitle, clearText, getTitleFromInput, inputData} from "../../store/titleSlice";

const MainPages = () => {
    const title = useSelector(state => state.title.title)
    const input = useSelector(state => state.title.input)
    const dispatch = useDispatch();

    const changeTextFunc = () => {
        dispatch(changeTitle())
    }
    const clearTextFunc = () => {
        dispatch(clearText())
    }
    const changeInputFunc = (e) =>{
        dispatch(inputData(e.target.value))
    }
    const addNewText = () => {
        dispatch(getTitleFromInput(input))
    }

    return (
        <div>
            <h1>Main Page - {title}</h1>

            <div>
                <input onChange={changeInputFunc} type="text" value={input}/>
                <button onClick={addNewText}>add</button>
            </div>

            <button onClick={changeTextFunc}>change text</button>
            <button onClick={clearTextFunc}>clear text</button>
        </div>
    );
};

export default MainPages;