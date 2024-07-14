import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = ({createRecipe}) => {

    const navigate = useNavigate();

    //State
    const [formData, setFormData] = useState({
        name: "",
        main_ingredient: "",
        origin: "",
        popularity: "",
    });

    //Functions
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    };

    const handleFormSubmission = (e) => {
        e.preventDefault();

        createRecipe(formData);
        setFormData({
            name: "",
            main_ingredient: "",
            origin: "",
            popularity: "",
        });
        navigate("/recipes");
    };

  return (

    <form onSubmit={handleFormSubmission}>

        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required ></input>

        <label htmlFor="main_ingredient">Main Ingredient: </label>
        <input id="main_ingredient" name="main_ingredient" type="text" value={formData.main_ingredient} onChange={handleInputChange} required ></input>

        <label htmlFor="origin">Origin: </label>
        <input id="origin" name="origin" type="text" value={formData.origin} onChange={handleInputChange} required ></input>

        <label htmlFor="popularity">Popularity: </label>
        <input id="popularity" name="popularity" type="number" value={formData.popularity} onChange={handleInputChange} min="1" max="10" placeholder="1 - 10" required ></input>

        <button type="submit" disabled={formData.name === "" || formData.mainIngredient === "" || formData.origin === "" || formData.popularity === ""}>create</button>

    </form>

  )
}

export default Form;