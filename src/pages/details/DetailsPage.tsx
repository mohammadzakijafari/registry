import React from 'react'
import { useLoaderData } from 'react-router-dom'
import type { DetailsLoaderResult } from './detailsLoader'

const DetailsPage = () => {

    const { details } = useLoaderData() as DetailsLoaderResult;
    console.log(details);

    return (
        <div className='space-y-4'>
            <h1 className='text-3xl font bold my-4'> {details.name} </h1>

            <div className=''>
                <h3 className='text-lg font-bold'> Description </h3>
                <div className='p-3 bg-gray-200 rounded'> {details.description} </div>

                <h3 className='text-lg font-bold'> License </h3>
                <div className='p-3 bg-gray-200 rounded'> {details.license} </div>

                <h3 className='text-lg font-bold'> Author </h3>
                <div className='p-3 bg-gray-200 rounded'> {details.author?.name} </div>
            </div>
        </div>
    )
}

export default DetailsPage