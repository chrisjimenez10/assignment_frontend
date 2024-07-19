import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (

    <div>
        <Link to="/" className='underline mx-3'>Home</Link>
        <Link to="/recipes" className='underline mx-3'>Recipes</Link>
        <Link to="/gallery" className='underline mx-3'>Gallery</Link>
    </div>

  )
}

export default Navbar;