import React, { useState, useEffect, useMemo } from 'react';
import { useTodosList, TodoActions } from '../../store';
import { useDispatch } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './todo-list.module.scss';
import TodoItem from '../todo-item/todo-item';



export default function TodoList() {
    const [hasMore, setHasMore] = useState(true);
    const [sortBy, setSortBy] = useState('createdAt');
    const todos = useTodosList();
    const dispatch = useDispatch();


    useEffect(() => {
        getMoreTodos();
    }, [dispatch]);

    const sortedTodos = useMemo(() => todos.sort((t1, t2) => (new Date(t1[sortBy]) - (new Date(t2[sortBy])))), [todos, sortBy]);

    const getMoreTodos = async () => setHasMore(await dispatch(TodoActions.fetchTodos({ skip: todos.length, limit: 10 })));



    return (
        <div >
            {
                todos.length > 0 ?
                <>
                    <label>{'Sort By:  '}</label>
                    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="createdAt">Creation Time</option>
                        <option value="updatedAt">Update Time</option>
                    </select>
                </> :
                <h1>Your list is empty. Add some things to do!</h1>
            }
            
            <InfiniteScroll height={500} className={styles['list-container']} dataLength={todos.length} next={getMoreTodos} hasMore={hasMore}>

                {
                    sortedTodos.map(todo => <TodoItem todo={todo} key={todo._id} />)
                }
            </InfiniteScroll>
        </div>
    )





}