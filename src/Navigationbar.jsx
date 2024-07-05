import React from "react";
import NavigationbarCSS from "./Navigationbar.module.css";
import profile from './assets/profile.png';
import icon from "./assets/logo.svg";
function Navigationbar() {
  return (
    <div className={NavigationbarCSS.root}>
      <div className={NavigationbarCSS.logo}>
        <img src={icon}></img>
        <p className={NavigationbarCSS.logoText}>Freshly</p>
      </div>
      <div className ={NavigationbarCSS.menu}>
        <li className={NavigationbarCSS.list}>
          <ul>Recipes</ul>
          <ul>Categories</ul>
          <ul>Favorites</ul>
          <ul>Lists</ul>
        </li>
      </div>
      <div className ={NavigationbarCSS.Navright}>
      <button className={NavigationbarCSS.addButton}>+ Add recipe</button>
      <img src = {profile} className = {NavigationbarCSS.profile}></img>
    </div>
    </div>
  );
}

export default Navigationbar;
