import React from 'react'
import "./RecipeDetails";
import "./AddRecipe";
import "./recipedetails.css";
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const RecipeDetails = ({recipes}) => {
  const {title}=useParams();

  return (
    <>
    <link rel="stylesheet" href="recipedetails.css" />
    <div className='details-body'>
    
      {recipes?.map((recipe, index) => (
          <div key={index}>
           
              <div className='details'>  
              
              <h1> {recipe.title} Recipe</h1>
              <img src={recipe.image} alt={recipe.title} width={"500px"} height={"400px"}/>
              <dl>
              <dt>Description :</dt>
              <dd>{recipe.description}</dd>
              <dt>Ingredients : </dt> 
              <dd>{recipe.ingredients}</dd>
              <dt>Preparation Stpes : </dt> 
              <dd>{recipe.preparation}</dd>
              </dl>
              </div>
            </div> 
            ))} 
    </div>
    </>
  )
}

export default RecipeDetails;