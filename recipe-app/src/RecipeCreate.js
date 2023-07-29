import React, { useState } from "react";
import './RecipeCreate.css'

function RecipeCreate({ recipes, setRecipes }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  //Creating states for required fields
  const [name, setName] = useState("Name");
  const [cuisine, setCuisine] = useState("Cuisine");
  const [photo, setPhoto] = useState("URL");
  const [ingredients, setIngredients] = useState("Ingredients");
  const [preparation, setPreparation] = useState("Preparation");

  //Handlers for setting the value from the event
  const nameHandler = (event) => setName(event.target.value);
  const cuisineHandler = (event) => setCuisine(event.target.value);
  const photoHandler = (event) => setPhoto(event.target.value);
  const ingredientsHandler = (event) => setIngredients(event.target.value);
  const preparationHandler = (event) => setPreparation(event.target.value);

  //On Submit set the recipes to contain all the previous recipes
  const submitHandler = (event) => {
    event.preventDefault();
    setRecipes([
      ...recipes,
      { name, cuisine, photo, ingredients, preparation },
    ]);
    setName("Name");
    setCuisine("Cuisine");
    setPhoto("URL");
    setIngredients("Ingredients");
    setPreparation("Preparation");
  };

  return (
    <form name="create" onSubmit={submitHandler}>
      <table className="table-color">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={nameHandler}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                value={cuisine}
                onChange={cuisineHandler}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                type="url"
                value={photo}
                onChange={photoHandler}
              />
            </td>
            <td>
              <textarea
                id="Ingredients"
                name="Ingredients"
                type="text"
                value={ingredients}
                onChange={ingredientsHandler}
              />
            </td>
            <td>
              <textarea
                id="Preparation"
                name="Preparation"
                type="content"
                value={preparation}
                onChange={preparationHandler}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
