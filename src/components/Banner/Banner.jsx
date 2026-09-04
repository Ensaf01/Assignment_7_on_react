import React from 'react';
import Chef from '../../assets/Image/chef-image.jpg'

const Banner = () => {
    return (
        <div>
            <section
                className=" mx-10 rounded-2xl bg-cover bg-center  "
                style={{ backgroundImage: `url(${Chef})` }}
            >
                <div className='flex flex-col text-center gap-10'>
                    <div className='flex flex-col justify-center items-center '>
                        <div className='flex flex-col gap-9 text-white mt-20 w-[900px]'>
                            <h1 className="text-5xl font-bold ">Discover an exceptional cooking class tailored for you!</h1>
                            <p>
                                Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.
                            </p>
                        </div>
                    </div>


                    <div className=''>
                        <button className='text-black bg-green-600 p-2 rounded-xl font-bold mr-3'>Explore Now</button>
                        <button className='border-2 border-white p-2 rounded-xl text-white'>Our Feedback</button>
                    </div>



                </div>
            </section>
            {/* <section
                className="min-h-[450px] mx-10 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: `url(${Chef})` }}
            >
                <div className="min-h-[450px] flex items-center bg-black/40 rounded-2xl">
                    <div className="px-10 text-white">
                        <h1 className="text-5xl font-bold">
                            Discover Delicious Recipes
                        </h1>

                        <p className="mt-4 max-w-xl">
                            Explore delicious recipes with ingredients, preparation time,
                            and calorie information for your next meal.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <button className="bg-green-500 px-5 py-3 rounded-lg">
                                Explore Now
                            </button>

                            <button className="border-2 border-white px-5 py-3 rounded-lg">
                                Our Feedback
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
};

export default Banner;