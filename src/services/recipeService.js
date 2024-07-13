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

//Export
export { fetchAllRecipes, }