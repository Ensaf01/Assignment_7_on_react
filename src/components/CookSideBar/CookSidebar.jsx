

const CookSidebar = ({ cooking }) => {
    const { recipe_id, recipe_name, short_description, preparing_time, calories } = cooking;
    return (
        <div className="">
            <div >

                {

                    <h1 className="text-2xl font-bold mb-3 text-center">Want to cook:{cooking.length}</h1>

                }
                <hr />

                <table className="">
                    <thead>
                        <tr>
                            <th className="border border-gray-400 p-3 text-left">Name</th>
                            <th className="border border-gray-400 p-3 text-left">Time</th>
                            <th className="border border-gray-400 p-3 text-left">Calories</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            cooking.map((items,index) =>
                         <tr key={items.recipe_id}>
                            <td className="border border-gray-400 p-3">{index+1}. {items.recipe_name}</td>
                            <td className="border border-gray-400 p-3">{items.preparing_time}</td>
                            <td className="border border-gray-400 p-3">{items.calories} <button className="bg-green-600 p-2 rounded-3xl text-white font-medium">Process</button></td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>


            </div>
        </div>

    );
};

export default CookSidebar;