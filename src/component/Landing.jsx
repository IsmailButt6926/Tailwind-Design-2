import React from 'react'
import Single from "../assets/single.png"
import bg from "../assets/bg.jpg"
import logo from "../assets/preview.jpg"
const landing = () => {
  return (
    <div >
      <nav className='flex items-center justify-between'>
        <div>
          <img src={logo} className='h-20 px-10 w-[235px]'></img>
        </div>
        <div>
          <ul className='flex space-x-14 px-14 items-center'>
            <li className='text-base font-semibold cursor-pointer hover:text-orange-500'>Home</li>
            <li className='text-base font-semibold cursor-pointer hover:text-orange-500'>About</li>
            <li className='text-base font-semibold cursor-pointer hover:text-orange-500'>Services</li>
            <li className='text-base font-semibold cursor-pointer hover:text-orange-500'>Blog</li>
            <li className='text-base font-semibold cursor-pointer hover:text-orange-500'>Contact</li>
            <button className='bg-[#fd7e14] py-2 w-[80px] font-medium rounded-md text-white hover:bg-black'>Join Us</button>
          </ul>
        </div>
      </nav>

    </div>
  )
}

export default landing
{/* <nav className=' bg-purple-800 text-white flex justify-between items-center'>
            <h1 className='text-2xl font-medium px-16 font-serif'>Phone Mania</h1>
            <ul className='flex  px-10 py-4 justify-end space-x-14'>
                <li className='cursor-pointer'>Home</li>
                <li className='cursor-pointer'> About</li>
                <li className='cursor-pointer'>Contact</li>

            </ul>
        </nav>
        <section className='bg-slate-300 h-[500px] pt-6 pl-16 space-y-3 flex items-center justify-around'>

            <div className='space-y-4'>
            <h1 className='text-4xl font-serif font-bold'>The best phone in the town</h1>
            <p className='w-[535px] text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quibusdam impedit qui nostrum reiciendis sunt, tenetur debitis natus eligendi dolores!</p>

            <div className='flex space-x-6'>
            <button className='bg-purple-600 py-3 w-[150px] font-medium rounded-md text-white hover:bg-sky-700'>Buy now</button>
            <button className='bg-purple-600 py-3 w-[150px] font-medium rounded-md text-white hover:bg-sky-700'>Contact us</button>
            </div>
            </div>

            <div>
            <img src={bg} className='h-72 rounded-md drop-shadow-xl'/>
            </div>

        </section> */}
