import React, {useContext, useState} from 'react'
import { RecipesContext } from '../App';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteRecipe, updateRecipe } from '../services/recipeService';

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

    <div className='leading-loose text-3xl text-center'>
        <h1>{singleRecipe.name}</h1>
        <h3>Main Ingredient: {singleRecipe.main_ingredient}</h3>
        <h3>Origin: {singleRecipe.origin}</h3>
        <h3>Popularity: {singleRecipe.popularity}/10</h3>

        {renderForm === "form" 
            ? 
            <Form renderForm={renderForm} setRenderForm={setRenderForm} recipeToEdit={recipeToEdit} updateRecipe={updateRecipe}/>
            :
            <>
                <button className="bg-sky-600 hover:bg-sky-700 text-white text-lg font-bold py-2 px-4 rounded-full mx-5 shadow-md" onClick={()=> {setRenderForm("form"); setRecipeToEdit(singleRecipe)}}>Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white text-lg font-bold py-2 px-4 rounded-full shadow-md" onClick={()=> {deleteRecipe(singleRecipe.id); navigate("/recipes");}}>Delete</button>
            </> 
        }
        
    </div>

  )
}

export default Details;