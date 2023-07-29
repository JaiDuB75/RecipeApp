//import React, {useState} from "react";
import './RecipeView.css'; 

function RecipeView({ recipe, deleteRecipes }) {
  return (
    <tr>
      <td className='recipe-text'>{recipe.name}</td>
      <td className='recipe-text'>{recipe.cuisine}</td>
      <td>
        <img className='recipe-photo' src={recipe.photo} />
      </td>
      <td className='recipe-text'>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td className='recipe-text'>
        <button name="delete" onClick={deleteRecipes}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default RecipeView;
