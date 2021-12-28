import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
// import { addBird, incrementBird } from '../src/store/birds/birds';
import { addBird, incrementBird, decrementBird } from '../src/actions/birdActions';

function App() {
  // HANDLING LOCAL state
  const [birdName, setBird] = useState('');
  const [error, setError] = useState(false);
  // Handling GLOBAL state
  // THIS USE SELECTOR CAN CAUSE UNEXPECTED RESULTS
  // const birds = useSelector(state => state.birds);
  // USING THIS TO sort() but preventing state MUTATION with spread operator
  const birds = [...useSelector(state => state.birds)].sort((a, b) => {
    return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
  });
  // Dispatching redux actions
  const dispatch = useDispatch();

  // Dispatching Add Bird function
  const handleSubmit = event => {
      setError(false);
      event.preventDefault();
      dispatch(addBird(birdName))
      setBird('');
  };
  
  // const handleSubmit = event => {
  //   if(birdName !== "") {
  //     setError(false);
  //     event.preventDefault();
  //     dispatch(addBird(birdName))
  //     setBird('');
  //   }
  // };
  
  // const handleSubmit = event => {
  //   if(birdName === "") {
  //     setError(true);
  //      //  alert("Supply a value for Bird Name");
  //       // console.log("Supply a value for Bird Name")
  //       // setTimeout(() => {
  //       //   return;
  //       //   }, 2000);
  //       return;
  //     }
  //   setError(false);
  //   event.preventDefault();
  //   dispatch(addBird(birdName))
  //   setBird('');
  // };

  return (
    <div className="wrapper">
      <h1>Bird List</h1>
       {
        error ? <div style={{ height: 200, textAlign: 'center', backgroundColor: 'red', color: 'white'}}>
          <h3 style={{ color: 'white' }}>Supply a value for Bird Name</h3>
        </div> : null
      }
        
      <form onSubmit={handleSubmit}> 
        <label>
          <p>
            Add Bird
          </p>
          <input type="text" 
          onChange={e => setBird(e.target.value)}
          value={birdName}
          />
        </label>
        <div>
          {/* DISABLE BUTTON UNTIL FORM IS FILLED */}
          {/* https://reactgo.com/react-disable-button/ */}
          <button disabled={!birdName} type="submit">Add</button>
        </div>
      </form>
      <ul>
        {birds.map(bird => (
          <li key={bird.name}>
            <h3>{bird.name}</h3>
            <div>
              Views: {bird.views}
               {/* Dispatching Increment Bird function */}
              {/* <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add">➕</span></button> */}
              <button onClick={() => dispatch(incrementBird(bird.name))}><span role="img" aria-label="add" style={{ fontSize: 25 }}>+</span></button>
              <button onClick={() => dispatch(decrementBird(bird.name))}><span role="img" aria-label="subtract" style={{ fontSize: 25 }}>−</span></button>
              </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;