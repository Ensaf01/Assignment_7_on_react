

const Currentcooking = ({currentCook}) => {
    console.log("curentfddddd",currentCook)
    return (
        <div>
            <h1 className="text-xl text-center font-semibold mb-2">current cooking length:{currentCook.length}</h1>
            <hr />
            <table className="mt-10 w-full">
                    <thead className="">
                        <tr className="">
                            <th className="border border-gray-400 p-3 text-left w-full ">Name</th>
                            <th className="border border-gray-400 p-3 text-left w-full">Time</th>
                            <th className="border border-gray-400 p-3 text-left w-full">Calories</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            currentCook.map((items,index) =>
                         <tr key={items.recipe_id}>
                            <td className="border border-gray-400 p-3">{index+1}. {items.recipe_name}</td>
                            <td className="border border-gray-400 p-3">{items.preparing_time}</td>
                            <td className="border border-gray-400 p-3">{items.calories} </td>
                        </tr>)
                        }
                        
                    </tbody>
                </table>

                
        </div>
    );
};

export default Currentcooking;