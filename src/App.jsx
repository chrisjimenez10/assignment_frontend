import {Routes, Route} from "react-router-dom";
import React, { createContext, useState } from "react";
import { fetchAllRecipes } from "./services/recipeService";

//Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import Details from "./components/Details";
import Create from "./components/Create";
import Error from "./components/Error";
import Gallery from "./components/Gallery";

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

    <main className="bg-white min-h-screen text-slate-950 text-wrap">
      <RecipesContext.Provider value={{fetchRecipesDatabase, recipeList}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:recipeId" element={<Details />} />
        <Route path="/createrecipe" element={<Create />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Error />}/> 
      </Routes>
      </RecipesContext.Provider>
    </main>

  )
}

export default App;
