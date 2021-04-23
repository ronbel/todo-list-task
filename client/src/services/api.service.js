import axios from 'axios';
import {useMemo} from 'react';


export class ApiService{

    constructor(){
        this.client = axios.create({
            baseURL: process.env.REACT_APP_API_BASE_URL
        })
    }

    fetchTodos = async ({skip = 0, limit = 10}) => (await this.client.get('/todos', {params: {skip,limit}})).data;
    updateTodo = async (todoId, {title, completed}) => (await this.client.put(`/todos/${todoId}/edit`, {title, completed})).data;
    createTodo = async title => (await this.client.post('/todos/new', {title})).data;
    deleteTodo = async todoId => (await this.client.delete(`/todos/${todoId}/delete`));
}

export const useApi = () => useMemo(() => new ApiService(), []);