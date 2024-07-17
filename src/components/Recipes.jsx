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

    <>
        <section className='flex flex-col items-center mt-5 bg-[url("src/assets/images/food-dishes.jpg")] py-3'>
            <h1 className='text-center text-3xl bg-white bg-opacity-80 rounded-md p-2 shadow-lg'>List of Recipes</h1>
            <button className="bg-black hover:bg-white hover:text-black text-white text-xs font-semibold py-2 px-3 m-2 rounded-full shadow-md" onClick={()=> navigate("/createrecipe")}>Create Recipe</button>
        </section>
        
        <ul className='text-lg ml-4 mt-4'>
            {recipeList.map((recipe)=>{
                return (
                    <li key={recipe.id} onClick={()=> navigate(`/recipes/${recipe.id}`)} style={{cursor: "pointer"}}>
                        <dt>- {recipe.name}<span className='text-slate-600'> {recipe.popularity > 7 ? <i>(Top Rating)</i>: ""}</span></dt>
                    </li>
                )
            })}
        </ul>
    </>

  )
}

export default Recipes;