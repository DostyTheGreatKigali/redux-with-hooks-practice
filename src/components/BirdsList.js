import { useDispatch, useSelector } from 'react-redux'
import { incrementBird, decrementBird } from '../actions/birdActions';


function BirdList() {
  // Handling GLOBAL state
  // THIS USE SELECTOR CAN CAUSE UNEXPECTED RESULTS
  // const birds = useSelector(state => state.birds);
  // USING THIS TO sort() but preventing state MUTATION with spread operator
    const birds = [...useSelector(state => state.birds)].sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      });
    // Dispatching redux actions
    const dispatch = useDispatch();

  return (
   <>
  <ul>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
            Views: 
               {/* Dispatching Increment Bird function */}
              {/* <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add">➕</span></button> */}
              <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add" style={{ fontSize: 25 }}>+</span></button>
              <button style={{ pointerEvents: 'none', backgroundColor: 'red', color: 'white' }}><span style={{ fontSize: 20 }}>{bird.views}</span></button>
              {/* Dispatching Decrement Bird function */}
              <button onClick={() => dispatch(decrementBird(bird.name))}><span role="img" aria-label="subtract" style={{ fontSize: 25 }}>−</span></button>
              </div>
          </li>
        ))}
      </ul>
  </>
  );
}

export default BirdList;