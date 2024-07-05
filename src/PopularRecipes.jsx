import React from "react";
import PopularRecipeCSS from "./PopularRecipe.module.css";
import PopularRecipeCard from "./PopularRecipeCard.jsx";
function PopularRecipes() {
  return (
    <div className={PopularRecipeCSS.root}>
      <p className={PopularRecipeCSS.heading}>Popular Recipes</p>
      <div className={PopularRecipeCSS.list}>
        <PopularRecipeCard />
        <PopularRecipeCard />
        <PopularRecipeCard />
        <PopularRecipeCard />
      </div>
    </div>
  );
}

export default PopularRecipes;
