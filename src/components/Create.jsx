import React from 'react';
import { createRecipe } from '../services/recipeService';

//Components
import Form from './Form';


const Create = () => {

  return (

    <>
        <section className='bg-[url("src/assets/images/food-dishes.jpg")] p-5 h-60'>
          <h1 className='text-3xl text-black bg-white bg-opacity-80 mt-5 text-center shadow-lg p-2 rounded-md'>Create New Recipe</h1>
        </section> 
       
        
        <main className='mt-5 ml-4 w-36'>
          <Form
              createRecipe={createRecipe}
          />
        </main>
        
    </>

  )
}

export default Create;