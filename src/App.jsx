import React from 'react'
import Navigationbar from "./Navigationbar";
import AppCSS from "./App.module.css";
import PopularRecipes from './PopularRecipes';
import PopularCategories from "./PopularCategories";
import Under30Mins from './Under30Mins';
import TopUsersContainer from './TopUsersContainer';
function App() {
  return (
    <div className = {AppCSS.root}>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
    <Navigationbar/>
    <PopularRecipes />
    <PopularCategories />
    <Under30Mins/>
    <TopUsersContainer/>
    </div>
  )
}

export default App
