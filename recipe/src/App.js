import logo from './logo.svg';
import './App.css';
import AddRecipe from './Components/AddRecipe';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <AddRecipe /> }/>
      </Routes>
    </div>
  );
}

export default App;
