import React, {useState, useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { RecipesContext } from '../App';


const Recipes = () => {

    //Context Provider Values
    const {fetchRecipesDatabase, recipeList} = useContext(RecipesContext);

    const navigate = useNavigate();
    
    useEffect(()=>{
        fetchRecipesDatabase();
    }, []);

  return (

    <div>
        <h1>Recipes from Database</h1>
        <ul>
            {recipeList.map((recipe)=>{
                return (
                    <li key={recipe.id} onClick={()=> navigate(`/recipes/${recipe.id}`)} style={{cursor: "pointer"}}>
                        <dt>{recipe.name} {recipe.popularity > 7 ? <img src='src\assets\images\gold-star.png'/> : ""}</dt>
                    </li>
                )
            })}
        </ul>
    </div>

  )
}

export default Recipes;