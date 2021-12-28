import { combineReducers } from 'redux';
import birdReducer from './bird-reducer';

export default combineReducers({
    birds: birdReducer,
})