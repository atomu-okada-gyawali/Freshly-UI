import React from "react";
import PopularRecipeCardCSS from "./PopularRecipeCard.module.css";
import likeIcon from "./assets/heart-roundedw.svg";
import commentIcon from "./assets/commentw.svg";
import zapIcon from "./assets/zapw.svg";

function PopularRecipeCard() {
  return (
    <div className={PopularRecipeCardCSS.root}>
      <div className={PopularRecipeCardCSS.stat}>
        <div className={PopularRecipeCardCSS.statchild}>
          <img src={likeIcon}></img>
          89
        </div>
        <div className={PopularRecipeCardCSS.statchild}>
          <img src={commentIcon}></img>
          45
        </div>
        <div className={PopularRecipeCardCSS.statchild}>
          <img src={zapIcon}></img>
          25k
        </div>
      </div>
      <div className={PopularRecipeCardCSS.titleContainer}>
        <p className={PopularRecipeCardCSS.recipeTitle}>
          Easy Meatballs with Arugula
        </p>
        <div className={PopularRecipeCardCSS.taglist}>
          <p>Italian</p>
          <p>Fried</p>
          <p>Main Course</p>
        </div>
      </div>
    </div>
  );
}

export default PopularRecipeCard;
