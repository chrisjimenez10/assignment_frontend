import React, {useState} from 'react';

const Carousel = () => {

    //State
    const [index, setIndex] = useState(0);

    const images = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKfCJq96hyvyFgjLHqCqAjVdL6wL2dbDT0g&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBO4qza0xqzlgXOKSrzffEXYxhRUberg9WQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjbIMVQtrlBz0qItjx5MjzuL6xv_JVJUHtw&s",
        "public/images/food-dishes.jpg"
    ];

    const length = images.length;

    const handlePrevious = () => {
        const newIndex = index - 1; //From current state of index, the previous image is going back 1 index position ( substract 1)
        setIndex(newIndex < 0 ? length - 1 : newIndex); //If state of index is at position 0 by subtracting - 1 it will bcome negative, so if that is the case if we click on the previous button again it will take us to the last element of the array (length -1) --> else, we simply go back an index position
    };

    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex); //If state of index is at the last element then by adding + 1 will be larger than the length, so if we press on Next button again we cycle back to start of array at index 0 --> else, we simply go forward an index position
    };

  return (

    <div className='carousel flex mt-5'>

        <button className='ml-4 mr-3' onClick={handlePrevious}> Previous </button>

        <div width="500px" height="400px">
            <img className='rounded-md' src={images[index]} />
        </div>

        <button className='ml-3' onClick={handleNext}> Next </button>

    </div>

  )
}

export default Carousel;