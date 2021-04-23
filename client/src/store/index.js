import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {useSelector} from 'react-redux';
import reducer from './reducer';


const middleware = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(reducer, middleware);



export const useTodosList = () => useSelector(state => state.todos);


export * as TodoActions from './action-creators';