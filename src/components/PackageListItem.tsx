import React from 'react'
import { Link } from 'react-router-dom'
import type { PackageSummary } from '../api/types/packageSummary'

// ----------------- 
interface PackageListItemProps {
    pack: PackageSummary;
}
const PackageListItem = ({ pack }: PackageListItemProps) => {

    // ---------------- Looping through Keywords ----------------
    const renderedKeywords = (pack.keywords || []).map((keyword) => {
        return <div key={keyword} className='border pb-1 px-3 text-sx bg-slate-200 rounded'> {keyword} </div>
    });

    return (
        <div className='border flex justify-between items-center rounded p-4'>
            <div className='flex flex-col gap-2'>
                <Link to={`/packages/${pack.name}`} className='text-xl font-bold'>
                    {pack.name}
                </Link>
                <p className='text-sm text-gray-500'>
                    {pack.description}
                </p>
                <div className='flex gap-1'>
                    {renderedKeywords}
                </div>
            </div>
            <div className='mr-6'>
                <Link to={`/packages/${pack.name}`} className='py-2 px-3 rounded bg-black text-white text-lg'> View </Link>
            </div>
        </div>
    )
}

export default PackageListItem