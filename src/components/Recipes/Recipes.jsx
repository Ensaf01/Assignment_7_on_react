
import Recipe from '../Recipe/Recipe.jsx'
import { useState, useEffect } from 'react';
const Recipes = ({ handleCookButton }) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='m-10 rounded-lg'>
           

            <div>
                <div className=' grid grid-cols-2 gap-10 '>

                    {
                        recipes.map((recipe, indx) => <Recipe
                            key={indx}
                            recipe={recipe}
                            handleCookButton={handleCookButton}
                        ></Recipe>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Recipes;