import React from 'react'

const Card = () => {
    return (
        <section className='pt-28'>
            <div className='container md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1920px] h-[485px]'>
                <div className='grid grid-cols-2 px-6'>
                    <h1 className='text-4xl font-bold font-serif'>Services we provide</h1>
                    <p className='text-xl '>Content marketing is nothing but offering users value. It is not just about traffic minion customers.</p>

                </div>

                <div className='grid grid-cols-3 mt-20 px-6 gap-6'>

                    <div className='bg-white p-12 border border-solid space-y-4 shadow-xl hover:shadow-orange-200 hover:scale-105 duration-300'>
                        <div >
                            <svg width={'40px'} height={'40px'} class="feather feather-edit" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        </div>
                        <h1 className='text-2xl font-bold font-serif'>Web Design</h1>
                        <p className='text-lg'>Content marketing is nothing but offering users value.</p>
                        <h2 className='font-bold pt-8 cursor-pointer hover:text-orange-500 '>Let's Talk</h2>
                    </div>

                    <div className='bg-white p-12 border border-solid space-y-4 shadow-xl hover:shadow-orange-200 hover:scale-105 duration-300'>
                        <div>
                       <svg width={'40px'} height={'40px'}  viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title/><g data-name="blog blogger blogspot post web" id="blog_blogger_blogspot_post_web"><path d="M26,12H24V8a5,5,0,0,0-5-5H8A5,5,0,0,0,3,8V20a1,1,0,0,0,2,0V8A3,3,0,0,1,8,5H19a3,3,0,0,1,3,3v5a1,1,0,0,0,1,1h3a1,1,0,0,1,1,1v9a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3,1,1,0,0,0-2,0,5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V15A3,3,0,0,0,26,12Z"/><path d="M11.5,14h4a2.5,2.5,0,0,0,0-5h-4a2.5,2.5,0,0,0,0,5Zm0-3h4a.5.5,0,0,1,0,1h-4a.5.5,0,0,1,0-1Z"/><path d="M11.5,23h9a2.5,2.5,0,0,0,0-5h-9a2.5,2.5,0,0,0,0,5Zm0-3h9a.5.5,0,0,1,0,1h-9a.5.5,0,0,1,0-1Z"/></g></svg>
                        </div>
                        <h1 className='text-2xl font-bold font-serif'>Blogger</h1>
                        <p className='text-lg'>Content marketing is nothing but offering users value.</p>
                        <h2 className='font-bold pt-8 cursor-pointer hover:text-orange-500 '>Let's Talk</h2>
                    </div>

                    <div className='bg-white p-12 border border-solid space-y-4 shadow-xl hover:shadow-orange-200  hover:scale-105 duration-300'>
                        <div>
                            <svg width={'40px'} height={'40px'} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></g></svg>
                        </div>
                        <h1 className='text-2xl font-bold font-serif'>E-Commerce</h1>
                        <p className='text-lg'>Content marketing is nothing but offering users value.</p>
                        <h2 className='font-bold pt-8 cursor-pointer hover:text-orange-500 '>Let's Talk</h2>
                    </div>

                </div>

            </div>

        </section>


    )
}

export default Card