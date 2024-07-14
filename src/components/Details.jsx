import React, {useContext, useState} from 'react'
import { RecipesContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteRecipe } from '../services/recipeService';

//Components
import Error from './Error';
import Form from './Form';

const Details = () => {

    //State
    const [renderForm, setRenderForm] = useState("");
    const[recipeToEdit, setRecipeToEdit] = useState(null);

    const navigate = useNavigate();

    //Using Provider Values
    const {recipeList} = useContext(RecipesContext);

    //Route Parameter - Destructure Params Object
    const {recipeId} = useParams();
    //Find and store recipe that matches id field with id passed via route parameter
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

        {renderForm === "form" 
            ? 
            <Form renderForm={renderForm} setRenderForm={setRenderForm} recipeToEdit={recipeToEdit}/>
            :
            <>
                <button onClick={()=> {setRenderForm("form"); setRecipeToEdit(singleRecipe)}}>edit</button>
                <button onClick={()=> {deleteRecipe(singleRecipe.id); navigate("/recipes");}}>delete</button>
            </> 
        }
        
    </div>

  )
}

export default Details;