import { createStore } from 'redux';
import allreducers from './reducers'

// Default State when no state exists
// const defaultBirds = [
//     {
//       name: 'robin',
//       views: 1,
//     }
//   ];

const store = createStore(allreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store;
