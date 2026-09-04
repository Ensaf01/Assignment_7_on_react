
import './App.css'
import { CiSearch } from "react-icons/ci";
import Recipes from './components/Recipes/Recipes';
import Banner from './components/Banner/Banner';


function App() {


  return (

    <>
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
      <Recipes></Recipes>



    </>
  )
}

export default App
