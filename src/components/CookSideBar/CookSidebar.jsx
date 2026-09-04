

const CookSidebar = ({ cooking }) => {
    const { recipe_id, recipe_name, short_description, preparing_time, calories } = cooking;
    return (
        <div className="border-2">
            <div >

                {  
                
                    <h1 className="text-2xl font-semibold">Want to cook:{cooking.length}</h1>
                }

            </div>
        </div>

    );
};

export default CookSidebar;