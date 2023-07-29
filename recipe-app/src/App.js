import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

   


  //Code for deleting recipe
  const deleteRecipes = (IndexToDelete) => 
  setRecipes((currentRecipes) => 
    currentRecipes.filter((recipe, index) => index !== IndexToDelete)
  );

  
  return (
    <div className="App header">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipes={deleteRecipes}/>
      <RecipeCreate recipes={recipes} setRecipes={setRecipes}/>
    </div>
  );
}

export default App;
