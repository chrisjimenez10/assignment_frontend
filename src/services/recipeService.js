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
        console.log(error);
    }
};

const updateRecipe = async (id, recipeData) => {
    try{
        const res = await axios.put(`${BACKEND_URL}/${id}`, recipeData);
        console.log(res.data);
    }catch(error){
        console.log(error);
    }
};

const deleteRecipe = async (id) => {
    try{
        const res = await axios.delete(`${BACKEND_URL}/${id}`);
        console.log(res.data);
    }catch(error){
        console.log(error);
    }
};

//Export
export { fetchAllRecipes, createRecipe, updateRecipe, deleteRecipe};