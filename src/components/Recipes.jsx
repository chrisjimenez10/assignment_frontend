import React, {useState, useEffect} from 'react';

import { fetchAllRecipes } from '../services/recipeService';

const Recipes = () => {

    //State
    const [recipeList, setRecipeList] = useState([]);

    //Functions
    const fetchRecipesDatabase = async () => {
        try{
            const listOfRecipes = await fetchAllRecipes();
            setRecipeList(listOfRecipes);
        }catch(error){
            console.error("Error fetching recipes:", error);
        }
    }

    useEffect(()=>{
        fetchRecipesDatabase();
    }, []);

  return (

    <div>
        <h1>Recipes from Database</h1>
        <ul>
            {recipeList.map((recipe)=>{
                return (
                    <li key={recipe.id}>
                        <dt>{recipe.name}</dt>
                    </li>
                )
            })}
        </ul>
    </div>

  )
}

export default Recipes;