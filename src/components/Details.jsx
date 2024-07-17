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

    //Functions
    const handleDelete = (id) => {
        deleteRecipe(id);
        navigate("/recipes");
    };

    const handleEdit = (recipeToEdit) => {
        setRecipeToEdit(recipeToEdit);
        setRenderForm("form");
    };

    //Error Handling for incorrect recipeId insertion at URL
    if(!singleRecipe){
        return <Error />
    }


  return (

    <div className='leading-loose text-2xl ml-4 mt-5'>
        <h1 className='font-bold outline-double pl-2 w-60'>{singleRecipe.name}</h1>
        <h3>Main Ingredient: {singleRecipe.main_ingredient}</h3>
        <h3>Origin: {singleRecipe.origin}</h3>
        <h3>Popularity: {singleRecipe.popularity}/10</h3>

        {renderForm === "form" 
            ? 
            <Form renderForm={renderForm} setRenderForm={setRenderForm} recipeToEdit={recipeToEdit} updateRecipe={updateRecipe}/>
            :
            <>
                <button className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-bold py-2 px-4 rounded-full mx-5 shadow-md" onClick={()=> handleEdit(singleRecipe)}>Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-full shadow-md" onClick={()=> handleDelete(singleRecipe.id)}>Delete</button>
            </> 
        }

        <img src='/src/assets/images/food-dishes.jpg' alt='table-food' width="300px" height="300px" className='mt-5 rounded-lg'/>
        
    </div>

  )
}

export default Details;