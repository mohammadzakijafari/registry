import React from 'react'
import { useLoaderData } from 'react-router-dom'
import type { searchLoaderResult } from './searchLoader';
import PackageListItem from '../../components/PackageListItem';

const SearchPage = () => {
    const { searchResult } = useLoaderData() as searchLoaderResult;

    const renderedResults = searchResult.map((result) => {
        return <PackageListItem pack={result} key={result.name} />
    });

    return (
        <div className='container mx-auto px-20'>
            <h1 className='text-2xl font-bold my-6'> Search Results </h1>

            <div className='space-y-4 mt-4'>
                {renderedResults}
            </div>
        </div>
    )
}

export default SearchPage