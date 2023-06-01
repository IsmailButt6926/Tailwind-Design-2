import React from 'react'
import startup from "../assets/startup.jpg"

const Main = () => {
    return (
        <>
        <section className=' md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1920px]  grid md:grid-cols-2 lg:grid-cols-2 '>

            
            <div className='bg-orange-300 h-[485px] pl-20 pt-40 space-y-6'>
                <h1 className='text-base text-orange-500 font-bold font-sans'>WE ARE NEW BUT DOING GREAT</h1>
                <h2 className='text-3xl font-bold font-sans'>We give the power back to the user</h2>
                <div>
                <p className='text-xl'>Content marketing is nothing but offering users value.</p>
                <p className='text-xl'>it is not just about traffic minion customers.</p>
                </div>
                <button className='bg-[#fd7e14] py-4 w-[150px] font-medium rounded-md text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300'>Explore Us</button>
            </div>


            <div>
                <img src={startup} className='h-[485px]'></img>
            </div>
        </section>
    
        </>
    )
}

export default Main