import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { addBird } from '../actions/birdActions';

function AddBird() {
    // HANDLING LOCAL state
  const [birdName, setBird] = useState('');

    // Dispatching redux actions
    const dispatch = useDispatch();

    // Dispatching Add Bird function
    const handleSubmit = event => {
        // setError(false);
        event.preventDefault();
        dispatch(addBird(birdName))
        setBird('');
    };
    

    return (
      <div> 

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
      </div>
    );
}

export default AddBird;
