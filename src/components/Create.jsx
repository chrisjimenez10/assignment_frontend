import React from 'react';
import { createRecipe } from '../services/recipeService';

//Components
import Form from './Form';


const Create = () => {

  return (

    <>

        <h1 className='text-3xl mt-5 text-center'>Create New Recipe</h1>
        
        <main className='mt-5 ml-4 w-36'>
          <Form
              createRecipe={createRecipe}
          />
        </main>
        
    </>

  )
}

export default Create;