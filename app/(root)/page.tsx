import React from 'react'
import { Heading } from '../components/Heading'
import SearchBox from '../components/SearchBox'

async function page({searchParams}: {
    searchParams: Promise<{query:string}>
}) {

    const query = await (await (searchParams))?.query;
    return (
        <section className="flex justify-center flex-col items-center w-full">
        <Heading title='What’s on your mind?' className=' yellow-green-gradient text-2xl md:text-4xl xl:text-6xl mt-20 font-extrabold font-euclid'  />
        <SearchBox query={query} />
        </section>
    )
}

export default page