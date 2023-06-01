import React from 'react'
import Person from "../assets/person.jpg"

const Philosophy = () => {
    return (
        <section className='pt-28 '>
            <div className='container md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1920px] h-[485px]'>
                <div className='container grid grid-cols-2 '>
                    <div>
                        <img src={Person} />
                    </div>
                    <div className='pl-14 pt-20 space-y-4'>
                        <h1 className='text-5xl font-bold'>Our Philosophy</h1>
                        <p className='text-base'>
                            The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.

                            Interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.1
                        </p>

                        <p className='text-base'>CEO, Consulto</p>

                        <h2 className='text-2xl font-semibold'>Capcilena Hanry</h2>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Philosophy