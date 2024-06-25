import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./style.css";



const AddRecipe = ({ setRecipes }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  const [image, setImage] = useState(null);
  const redirect=useNavigate();
  

  function handleSubmit(event) {
    event.preventDefault();
    const addedreceipe = {
      title,
      description,
      ingredients,
      preparation,
      image,
    };

  

      
    if(!(addedreceipe.title)){
      toast.error(` Title is mandatory`);
  }
  else if(!(addedreceipe.description)){
    toast.error(` Description is mandatory`);
  }
  else if(!(addedreceipe.ingredients)){
    toast.error(` Ingredients are mandatory`);
  }
  else if(!(addedreceipe.preparation)){
    toast.error(` Preparation Steps are mandatory`);
  }
  else if(!(addedreceipe.image)){
    toast.error(` Please upload Image`);
  }

  else{

    setRecipes((previous)=>[...previous, addedreceipe]);
   
    redirect("/recipe-list")
    toast.success("Recipe added succesfully");
  }

  }
  return (
    <div className="App1">
      <h1>Add Recipe Page</h1>
      <form className="form__container" onSubmit={handleSubmit}>
        <div className="form__controls">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            value={title}
            id="username"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            value={description}
            id="username"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="ingridient">Ingredient : </label>
          <input
            type="text"
            value={ingredients}
            id="username"
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="form__controls">
          <label htmlFor="preparation">Preparation Steps : </label>
          <input
            type="text"
            value={preparation}
            id="username"
            onChange={(e) => setPreparation(e.target.value)}
          />
        </div>
        <div className="form__controls">
        <label htmlFor="image">Upload Image : </label>
            <input 
              type="file"
              id="textfield" onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}/>
        </div>
        <div className="form__controls">
          <button className="button">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
