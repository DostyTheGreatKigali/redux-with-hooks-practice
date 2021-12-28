import './App.css';
import BirdList from './components/BirdsList';
import AddBird from './components/AddBird';

function App() {
  


  return (
    <div className="wrapper">
      <h1>Bird List</h1>
      <AddBird />
      <BirdList />
    </div>
  );
}

export default App;