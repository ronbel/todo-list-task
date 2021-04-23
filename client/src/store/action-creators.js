import {ADD_TODO,UPDATE_TODO,DELETE_TODO,FETCH_TODOS} from './actions';
import {ApiService} from '../services/api.service';


const api = new ApiService();

export function fetchTodos({skip, limit}){
    return async function(dispatch){
        const additionalTodos = await api.fetchTodos({skip, limit});
        dispatch({type: FETCH_TODOS, payload: {additionalTodos}});
    }
}

export function addTodo(title){
    return async function(dispatch){
        const newTodo = await api.createTodo(title);
        dispatch({type: ADD_TODO, payload: {newTodo}});
    }
}

export function deleteTodo(todoId){
    return async function(dispatch){
        await api.deleteTodo(todoId);
        dispatch({type: DELETE_TODO, payload: {idToDelete: todoId}});
    }
}

export function updateTodo(todoId, {title, completed}){
    return async function(dispatch){
        const updatedTodo = await api.updateTodo(todoId, {title, completed});
        dispatch({type: UPDATE_TODO, payload: {updatedTodo}})
    }
}