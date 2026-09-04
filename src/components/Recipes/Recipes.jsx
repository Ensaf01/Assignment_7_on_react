
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
            <h1>Recipes length:{recipes.length}</h1>
            {
                recipes.map((recipe, indx) => <Recipe key={indx} recipe={recipe}></Recipe>)
            }


        </div>
    );
};

export default Recipes;