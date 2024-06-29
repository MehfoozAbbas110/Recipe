import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import AddRecipe from './Components/AddRecipe';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';
import Storee from './Redux/Storee';
import TodoList from './Redux/TodoList';
import AddTodoForm from './Redux/AddTodoForm';
import LoginPage from './Login/LoginPage';
import Logout from './Login/Logout';
import { useSelector } from 'react-redux';



function App() {
  const user = useSelector((state) => state.user);
  console.log(user);
  const [recipes, setRecipes] = useState([]);
  
 

    return(
    
    <div className="App">
      <Routes>
        <Route path="/" element={ <AddRecipe setRecipes={setRecipes} /> }/>
        <Route path="/recipe-list" element={ <RecipeList recipes={recipes} /> }/>
        <Route path="/recipe-details/:title" element={<RecipeDetails recipes={recipes} />}  />
        <Route path="/todolist" element={<AddTodoForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={ <Logout />} />

      </Routes>
    // </div>
    );
      
};

export default App;
