import React from 'react'
import BlogPage from '../Components/BlogPage'
import { FaSearch } from 'react-icons/fa'

const Blog = () => {
  
  return (
    <div>

      <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text=7xl leading-snug font-bold mb-5'> 
          Blog Page
        </h2>

        <div className='max-w-7xl mx-auto flex justify-center items-center text-black'>
          <div className='relative w-100%'>
          <span className='absolute inset-y-0 left-1 pl-2 flex items-center text-gray-500'> <FaSearch /></span>
            <input
              type='text'
              name='text'
              id='text'
              placeholder='Search...'
              className='w-full px-40 py-2 rounded-md border border-gray-300'
            />
          </div>
        </div>
      </div>

        {/* all blogs containers */}
        <div className='max-w-7xl mx-auto'>
            <BlogPage />
        </div>
    </div>
  )
}

export default Blog