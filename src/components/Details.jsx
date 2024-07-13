import React, {useContext} from 'react'
import { RecipesContext } from '../App';
import { useParams } from 'react-router-dom';
import Error from './Error';

const Details = () => {

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
    </div>

  )
}

export default Details;