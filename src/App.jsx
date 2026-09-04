
import './App.css'
import { CiSearch } from "react-icons/ci";
import Recipes from './components/Recipes/Recipes';
import Banner from './components/Banner/Banner';
import { useState } from 'react';
import CookSidebar from './components/CookSideBar/CookSidebar';
import { Toaster, toast } from "react-hot-toast";


function App() {
  
  const [cooking, setCooking] = useState([]);

  const handleCookButton = (recipeAdd) => {
    const alreadyAdded = cooking.some(
      item => item.recipe_id === recipeAdd.recipe_id
    );

    if (alreadyAdded) {
      toast.error("Recipe already added!");
      return;
    }
    // console.log("recipes add",recipeAdd)// check after click want to cook buton each aray come or not
    const newCookList = [...cooking, recipeAdd]
    setCooking(newCookList);
    toast.success("Recipe added successfully!");
  }


  return (

    <>
    <Toaster position="top-center" />
      <div className='flex m-10 border-2 rounded-lg  items-center text-center justify-between p-1 '>
        <div className=''>
          <h2 className='text-3xl font-semibold'><a href="">Recipe Calories</a></h2>
        </div>

        <div className=' mt-1 flex gap-4'>
          <button className='border-2 rounded-md p-1'>Home</button>
          <button className='border-2 rounded-md p-1'>Recipes</button>
          <button className='border-2 rounded-md p-1'>About</button>
          <button className='border-2 rounded-md p-1'>Search</button>
        </div>
        <div className='flex  mt-2 items-center gap-2'>
          <div className='flex border-2 items-center gap-2 border-blue-200 rounded-lg'>
            <CiSearch>  </CiSearch>
            <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
          </div>

          <div className="">
            <img className='rounded-full w-10 '
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

        </div>


      </div>
      <Banner></Banner>
      <div className='flex justify-center   text-black text-center rounded-lg m-10'>
        <div className=''>
          <h1 className="text-4xl font-bold mb-3">Our Recipes</h1>
          <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br></br> Eget urna volutpat curabitur elementum mauris aenean neque. </p>
        </div>
      </div>
      <div className='grid grid-flow-col m-10 '>
        <div className='w-4/5 '>
          <div className=''>
            <Recipes handleCookButton={handleCookButton}></Recipes>
          </div>
        </div>
        <div className='mt-10 border-2 p-10 rounded-lg'>
          <CookSidebar cooking={cooking}></CookSidebar>
        </div>




      </div>


    </>
  )
}

export default App
