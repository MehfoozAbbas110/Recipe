import logo from './logo.svg';
import './App.css';
import AddRecipe from './Components/AddRecipe';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/addrecipe" element={<AddRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
