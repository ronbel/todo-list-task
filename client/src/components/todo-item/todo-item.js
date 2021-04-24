import React, { useState, useEffect } from 'react';
import styles from './todo-item.module.scss';
import { TodoActions } from '../../store';
import { useDispatch } from 'react-redux';

export default function TodoItem({ todo }) {

    const [titleValue, setTitleValue] = useState(todo.title);
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setTitleValue(todo.title);
    }, [todo])

    const toggleEditMode = () => {
        if(editMode){
            setEditMode(false);
            setTitleValue(todo.title);
            return;
        }
        setEditMode(true);
    }

    const saveTitle = async () => {
        try{
            await dispatch(TodoActions.updateTodo(todo._id, { title: titleValue, completed: todo.completed }));
            setEditMode(false);
        } catch (e) {
            alert('An error occured while saving new title');
            console.error(e);
        }
    }

    const deleteTask = async () => await dispatch(TodoActions.deleteTodo(todo._id))

    const toggleCompleted = async () => {
        try {
            await dispatch(TodoActions.updateTodo(todo._id, { title: todo.title, completed: !todo.completed }));
        } catch (e) {
            alert('Error toggling todo completed status');
            console.error(e);
        }
    }

    return (
        <div className={styles.container}>
            <input className={styles['title-input']} onChange={e => setTitleValue(e.target.value)} value={titleValue} disabled={!editMode}></input>
            <div className={styles['completed-container']}>
                <label>Completed: </label>
                <input type="checkbox" readOnly onClick={toggleCompleted} checked={todo.completed}></input>
            </div>
            <span>Created on: {(new Date(todo.createdAt)).toLocaleString('en-GB')}</span>
            <span>Updated on: {(new Date(todo.updatedAt)).toLocaleString('en-GB')}</span>

            <div className={styles['buttons-container']}>
                {editMode && <button onClick={saveTitle}>Save</button>}
                <button onClick={toggleEditMode}>{editMode ? 'Cancel' : 'Edit Title'}</button>
                <button onClick={deleteTask}>Delete</button>
            </div>
        </div>
    )


}