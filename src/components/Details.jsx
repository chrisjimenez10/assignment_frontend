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

    <div className='leading-relaxed ml-4 mt-5'>
        <h1 className='font-bold outline-double pl-2 py-2 w-60 text-3xl'>{singleRecipe.name}</h1>
        <section className='text-2xl mt-2'> 
            <h3>Main Ingredient: {singleRecipe.main_ingredient}</h3>
            <h3>Origin: {singleRecipe.origin}</h3>
            <h3>Popularity: {singleRecipe.popularity}/10</h3>
        </section>


        {renderForm === "form" 
            ?
            <section className='mt-2 w-36'>
                <Form renderForm={renderForm} setRenderForm={setRenderForm} recipeToEdit={recipeToEdit} updateRecipe={updateRecipe}/>
            </section>
            :
            <>
                <button className="hover:bg-sky-600 bg-sky-700 text-white text-sm font-bold py-2 px-4 rounded-full mx-5 mt-3 shadow-md" onClick={()=> handleEdit(singleRecipe)}>Edit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-full shadow-md" onClick={()=> handleDelete(singleRecipe.id)}>Delete</button>
            </> 
        }

        <img src='/images/food-dishes.jpg' alt='table-food' width="300px" height="300px" className='mt-5 rounded-lg shadow-xl'/>
    </div>

  )
}

export default Details;