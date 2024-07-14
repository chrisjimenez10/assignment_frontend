import React, {useContext} from 'react'
import { RecipesContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import Error from './Error';
import { deleteRecipe } from '../services/recipeService';

const Details = () => {

    const navigate = useNavigate();

    //Using Provider Values
    const {recipeList} = useContext(RecipesContext);

    //Route Parameter
    const {recipeId} = useParams();

    const singleRecipe = recipeList.find((recipe)=>{
        return recipe.id === Number(recipeId);
    });

    //Error Handling for incorrect recipeId insertion at URL
    if(!singleRecipe){
        return <Error />
    }


  return (

    <div>
        <h1>{singleRecipe.name}</h1>
        <h3>Main Ingredient: {singleRecipe.main_ingredient}</h3>
        <h3>Origin: {singleRecipe.origin}</h3>
        <h3>Popularity: {singleRecipe.popularity}/10</h3>
        <button>edit</button>
        <button onClick={()=> {deleteRecipe(singleRecipe.id); navigate("/recipes")}}>delete</button>
    </div>

  )
}

export default Details;