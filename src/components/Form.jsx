import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({createRecipe, renderForm, setRenderForm, recipeToEdit, updateRecipe}) => {

    const navigate = useNavigate();

    //State
    const [formData, setFormData] = useState({
        name: "",
        main_ingredient: "",
        origin: "",
        popularity: "",
    });

    //Populate Form input fields with chosen recipe to edit
    useEffect(()=>{
        if(recipeToEdit){
            setFormData({
                name: recipeToEdit.name,
                main_ingredient: recipeToEdit.main_ingredient,
                origin: recipeToEdit.origin,
                popularity: recipeToEdit.popularity,
            });
        }
    },[recipeToEdit]);

    //Functions
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();

        if(recipeToEdit){
            updateRecipe(recipeToEdit.id, formData);
        }else{
            createRecipe(formData);
            setFormData({
                name: "",
                main_ingredient: "",
                origin: "",
                popularity: "",
            });
        }
        navigate("/recipes");
    };

  return (

    <form onSubmit={handleFormSubmission} className='leading-loose'>

        <label htmlFor="name" className='font-bold'>Name: </label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required className='bg-gray-200 rounded-md pl-1 font-semibold'></input>

        <label htmlFor="main_ingredient" className='font-bold'>Main Ingredient: </label>
        <input id="main_ingredient" name="main_ingredient" type="text" value={formData.main_ingredient} onChange={handleInputChange} required className='bg-gray-200 rounded-md pl-1 font-semibold'></input>

        <label htmlFor="origin" className='font-bold'>Origin: </label>
        <input id="origin" name="origin" type="text" value={formData.origin} onChange={handleInputChange} required className='bg-gray-200 rounded-md pl-1 font-semibold'></input>

        <label htmlFor="popularity" className='font-bold'>Popularity: </label>
        <input id="popularity" name="popularity" type="number" value={formData.popularity} onChange={handleInputChange} min="1" max="10" placeholder="1 - 10" required className='bg-gray-200 rounded-md pl-1 font-semibold mt-2'></input>

        <button className='ml-4 mt-4 hover:bg-sky-600 bg-sky-700 text-white text-base p-1 font-bold hover:cursor-pointer rounded-full shadow-md' type="submit" disabled={formData.name === "" || formData.mainIngredient === "" || formData.origin === "" || formData.popularity === ""}>{recipeToEdit ? "Edit" : "Create"}</button>

        {/* Hide Edit Form in Details component ONLY - Will render only in Details Component */}
        {renderForm === "form" ? <button className='ml-4 p-1 text-base font-bold hover:cursor-pointer rounded-full bg-gray-950 text-gray-50 hover:bg-gray-50 hover:text-gray-950' onClick={()=> setRenderForm("")}>Cancel</button> : ""}

    </form>

  )
}

export default Form;