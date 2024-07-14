import React from 'react';
import { createRecipe } from '../services/recipeService';

//Components
import Form from './Form';


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