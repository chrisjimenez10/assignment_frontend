import React from 'react';
import Form from './Form';
import { createRecipe } from '../services/recipeService';

const Create = () => {

  return (

    <div>

        <h1>Create New Recipe</h1>
        
        <Form 
            createRecipe={createRecipe}
        />

    </div>

  )
}

export default Create;