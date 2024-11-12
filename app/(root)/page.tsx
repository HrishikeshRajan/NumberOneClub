import React from 'react'
import { Heading } from '../components/Heading'

function page() {
    return (
        <section className="flex justify-center h-screen">
         <Heading title='What’s on your mind?' className=' yellow-green-gradient text-3xl md:text-4xl xl:text-6xl mt-20 font-extrabold font-euclid'  />
        </section>
    )
}

export default page