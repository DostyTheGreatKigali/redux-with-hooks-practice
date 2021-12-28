import { ADD_BIRD, INCREMENT_BIRD, DECREMENT_BIRD } from './types';

// ACTIONS CAN ONLY 

export function addBird(bird) {
    // if(bird === "") {
    //   alert("Supply a value for Bird Name");
    //   return;
    // }
    return {
      type: ADD_BIRD,
      bird,
    }
  }
  
export function incrementBird(bird) {
      return {
        type: INCREMENT_BIRD,
        bird
      }
}
  
  
export function decrementBird(bird) {
      return {
        type: DECREMENT_BIRD,
        bird
      }
}
  
