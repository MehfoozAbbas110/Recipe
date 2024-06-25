import React from "react";
import "./recipelist.css";
import { useNavigate } from "react-router-dom";

function RecipeList({recipes}){
    const redirectTodetails= useNavigate();
    function handleClick1(){
        redirectTodetails("/") 
    }
  
  function handleClick(){

    redirectTodetails(`/recipe-details/${recipes[0].title}`)
  }
  return (

    //   <link rel="stylesheet" href="recipelist.css" />
      <div className="list-body">
       
        <h1>Recipes List</h1>
        {/* <a href="/"> Click to Add your Recipe </a> */}
        <button onClick={handleClick1}>Click to Add your Recipe</button>
        <div id="list">
        {recipes?.map((recipe, index) => (
          <div key={index}>
           
            <div className="main">
              {/* <p className="box"> */}
                <img onClick={handleClick} src={recipe.image} alt="img"  width={"100%"}/>
              
              <h4 onClick={handleClick}>{recipe.title}</h4>
              {/* </p> */}
            </div>  
            </div> 
            ))} 
          </div>   
        
      </div> 
  );
};

export default RecipeList;