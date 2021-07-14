import React from "react";
import style from "../recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p> Calories - {calories}</p>
      <img className={style.images} src={image} alt="" />
    </div>
  );
};

export default Recipe;
