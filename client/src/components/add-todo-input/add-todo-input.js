import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {TodoActions} from '../../store';
import styles from './add-todo-input.module.scss';

export default function AddTodoInput(){

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const onInputChange = e => setInputValue(e.target.value)
    const clearInput = () => setInputValue('');

    const addNewTodo = async () => {
        try{
            await dispatch(TodoActions.addTodo(inputValue));
            clearInput();
        } catch (e){
            alert('An error has occured while adding a new todo');
            console.error(e);
        }
    }

    return (
        <div className={styles.container}>
            <input value={inputValue} onChange={onInputChange}/>
            <button disabled={!inputValue.trim()} onClick={addNewTodo}>Add Todo</button>
        </div>
    )


}