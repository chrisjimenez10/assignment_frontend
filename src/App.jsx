import {Routes, Route} from "react-router-dom";
import React, { createContext, useState } from "react";
import { fetchAllRecipes } from "./services/recipeService";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Details from "./components/Details";

export const RecipesContext = createContext(null);


const App = () => {

  //State
  const [recipeList, setRecipeList] = useState([]);

  //Functions
  const fetchRecipesDatabase = async () => {
    try{
        const listOfRecipes = await fetchAllRecipes();
        setRecipeList(listOfRecipes);
    }catch(error){
        console.error("Error fetching recipes:", error);
    }
  }

  return (

    <main>
      <RecipesContext.Provider value={{fetchRecipesDatabase, recipeList}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<Details />} />
        <Route path="*" element={<h1>Woops, nothing here!</h1>}/> 
          //Create a component for Error handling url endpoint and button to navigate back to Home Page
      </Routes>
      </RecipesContext.Provider>
    </main>

  )
}

export default App;
