
import Recipe from '../Recipe/Recipe.jsx'
import { useState, useEffect } from 'react';
const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
           
            <div className='m-10 grid grid-cols-2 gap-10 '>

                {
                    recipes.map((recipe, indx) => <Recipe key={indx} recipe={recipe}></Recipe>)
                }


            </div>
        </div>

    );
};

export default Recipes;