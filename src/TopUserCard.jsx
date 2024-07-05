import React from 'react'
import TopUserCardCSS from './TopUserCard.module.css';
import zapicon from "./assets/zap.svg";
import hearticon from "./assets/heart-rounded.svg";
function TopUserCard() {
  return (
    <div className={TopUserCardCSS.root}>
        <div className={TopUserCardCSS.profileBar}>
            <div className={TopUserCardCSS.profileBarLeft}>
                <div className={TopUserCardCSS.image}></div>
                <p className={TopUserCardCSS.name}>Claire</p>
            </div>
            <div className ={TopUserCardCSS.profileBarright}>
                <div className={TopUserCardCSS.profileBarrightitems}>
                <img src ={zapicon}></img>
                <p>1.5M</p>
                </div>
                <div className={TopUserCardCSS.profileBarrightitems}>
                <img src ={hearticon}></img>
                <p>532</p>
                </div>
                
                <button className={TopUserCardCSS.followButton}>Follow</button>
            </div>
        </div>
        <div className={TopUserCardCSS.noOfUserBar}>
        <p>25 Recipes</p>
        <p>View all</p>
        </div>
        <div className={TopUserCardCSS.recipeGrid}>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
        <div className={TopUserCardCSS.recipeButton}>
        </div>
    </div>
    </div>
  )
}

export default TopUserCard
