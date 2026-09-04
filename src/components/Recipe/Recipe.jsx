

const Recipe = ({ recipe }) => {
    console.log("length", recipe);
    return (
        <div>
            
            <div className=" flex flex-col gap-3 border-2 p-3 rounded-lg">
                <img className="w-full rounded-lg" src={recipe.recipe_image} alt="" />
                <p className="text-xl font-semibold">{recipe.recipe_name}</p>
                <p>{recipe.short_description}</p>
                <hr />
                <h2 className="font-semibold text-xl">ingredients:{recipe.ingredients.length}</h2>
                <div>
                    <ul>
                     
                        {
                          recipe.ingredients.map(ing => <li>{ing}</li>)  
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Recipe;