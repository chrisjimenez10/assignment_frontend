import axios from "axios";

const BACKEND_URL = `${import.meta.env.VITE_BACKEND_URL}/api/recipes`;

//HTTP Functions
const fetchAllRecipes = async () => {
    try{
        const res = await axios.get(BACKEND_URL);
        console.log(res.data);
        return res.data;
    }catch(error){
        throw error;
    }
};

const createRecipe = async (recipeData) => {
    try{
        const res = await axios.post(BACKEND_URL, recipeData);
        console.log(res.data);
    }catch(error){
        throw error;
    }
};



//Export
export { fetchAllRecipes, createRecipe}