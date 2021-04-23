import { ADD_TODO, UPDATE_TODO, DELETE_TODO, FETCH_TODOS } from './actions';


const DEFAULT_STATE = { todos: [] };

export default function reducer(state = DEFAULT_STATE, action) {

    const { type, payload } = action;
    switch (type) {
        case ADD_TODO: {
            const { newTodo } = payload;
            return { ...state, todos: [...state.todos, newTodo] };
        }
        case FETCH_TODOS: {
            const { additionalTodos } = payload;
            return { ...state, todos: [...state.todos, ...additionalTodos] };
        }
        case DELETE_TODO: {
            const {idToDelete} = payload;
            return {...state, todos: state.todos.filter(todo => todo._id !== idToDelete)};
        }
        case UPDATE_TODO: {
            const {updatedTodo} = payload;
            const nextTodos = [...state.todos];
            const todoIndex = nextTodos.findIndex(todo => todo._id === updatedTodo._id);
            nextTodos[todoIndex] = updatedTodo;
            return {...state, todos: nextTodos};
        }

        default: return state;
    }


}