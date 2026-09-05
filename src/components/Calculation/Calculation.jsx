
const Calculation = ({ time, calorie }) => {
    console.log("tiem", time);
    return (
        <div className=" mt-10 font-semibold flex gap-10">
            <h1>Total Calories : {calorie} calories</h1>
            <h1>Total Time : {time} mins</h1>

        </div>
    );
};

export default Calculation;