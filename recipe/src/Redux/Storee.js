import { createStore } from 'redux';
import todoReducer from './Reducer';

const Storee = createStore(todoReducer);

export default Storee;