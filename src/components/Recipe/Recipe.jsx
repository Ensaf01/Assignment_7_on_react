

const Recipe = ({ recipe }) => {
    console.log("length", recipe);
    return (
        <div>
            <h1>Recipes length:{recipe.recipe_name}</h1>
        </div>
    );
};

export default Recipe;