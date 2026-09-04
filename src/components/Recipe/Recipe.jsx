
import { BsStopwatch } from "react-icons/bs";
const Recipe = ({ recipe,handleCookButton }) => {
    // console.log("length", recipe);
    return (
        <div className="">

            <div className=" flex flex-col gap-3 border-2 p-3 rounded-lg">
                <img className="w-full rounded-lg" src={recipe.recipe_image} alt="" />
                <p className="text-xl font-semibold">{recipe.recipe_name}</p>
                <p>{recipe.short_description}</p>
                <hr />
                <h2 className="font-semibold text-xl">ingredients:{recipe.ingredients.length}</h2>
                <div>
                    <ul>

                        {
                            recipe.ingredients.map((ing,idex) => <li key={idex}>{ing}</li>)
                        }

                    </ul>
                </div>
                <div className="flex gap-2 items-center">
                 <BsStopwatch></BsStopwatch>
                <p>{recipe.preparing_time} minutes</p>
                </div>
                <div>
                    <button  onClick={()=>handleCookButton(recipe)} className="bg-green-700 rounded-2xl  md:w-12 lg:w-24 p-2">Want to Cook</button>

                </div>
                
            </div>
        </div>
    );
};

export default Recipe;