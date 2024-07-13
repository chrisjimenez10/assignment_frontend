import React, {useState} from 'react';

const Form = () => {

    //State
    const [formData, setFormData] = useState({
        name: "",
        mainIngredient: "",
        origin: "",
        popularity: "",
    });

    //Functions
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        setFormData({...formData, [name]: value});
    };

  return (

    <form>

        <label htmlFor="name">Name: </label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleInputChange} required ></input>

    </form>

  )
}

export default Form;