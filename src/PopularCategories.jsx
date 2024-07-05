import React from 'react'
import PopularCategoriesCSS from "./PopularCategories.module.css";
// import nonVegPhoto from "./assets/nonveg.jpg";
function PopularCategories() {
  return (
    <div className={PopularCategoriesCSS.root}>
      <p className={PopularCategoriesCSS.heading}>Popular Categories</p>
      <div className = {PopularCategoriesCSS.list}>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>
        <div className={PopularCategoriesCSS.listItem}> 
            <div className ={PopularCategoriesCSS.itemPhoto}>
            </div>
            <p className={PopularCategoriesCSS.itemName}>Meat</p>
        </div>

        
      </div>
    </div>
  )
}

export default PopularCategories
