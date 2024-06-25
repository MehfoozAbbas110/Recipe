import "./style.css";


function AddRecipe() {
  return (
    <div className="App">
      <h1>Add Recipe Page</h1>
      <form className="form__container">
        <div className="form__controls">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div className="form__controls">
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div className="form__controls">
          <label htmlFor="ingridient">Ingredient : </label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div className="form__controls">
          <label htmlFor="preparation">Preparation Steps : </label>
          <input
            type="text"
            id="username"
          />
        </div>
        <div className="form__controls">
        <label htmlFor="image">Upload Image : </label>
            <input 
              type="file" />
        </div>
        <div className="form__controls">
          <button className="button">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipe;
