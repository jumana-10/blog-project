import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Write = () => {
  return (
    <div>
      {/* <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text=7xl leading-snug font-bold mb-5'> 
          Write Page
        </h2>
      </div> */}

      {/* body */}
      <div>
        <form className='w-full h-1/2 bg-gray-100 '>

          {/* share and publish button */}
          <div className='flex justify-end items-end mr-20'>
            <button className='hover:shadow-md rounded-md bg-teal-600 hover:bg-teal-500 py-2 mt-8 mb-4
                px-8 text-base font-semibold text-white outline-none m-4'>Share</button>
              <button className='hover:shadow-md rounded-md bg-teal-600 hover:bg-teal-500 py-2 mt-4 mb-4
                  px-8 text-base font-semibold text-white outline-none'>Publish</button>
            </div>

            {/* title */}
            <div className='flex justify-center items-center max-w-screen-lg mx-auto'>
              <label for="file" class="cursor-pointer inline-block px-3 py-2 mt-4 rounded">
                <FaPlus className='text-xl'/>
              </label>
              <input type='file' id='file' name='file' className='hidden'/>
              <input 
              type='text' 
              placeholder='Title' 
              className='w-96 lg:w-4/5 xl:w-4/5 p-2 rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base mt-4
                          font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md' 
              autoFocus={true} />
            </div>

            {/* story */}
            <div className='flex justify-center items-center max-w-screen-lg mx-auto'>
              <textarea 
              placeholder='Tell  your story...'
              type="text"
              className='w-full h-40 lg:w-4/5 xl:w-4/5 p-2 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base mt-4 mb-5
                          font-medium text-[#6B7280] outline-none focus:border-[#6a64f1] focus:shadow-md'
              >
              </textarea>
            </div>

            {/* category */}
            <hr></hr>
            <div className="max-w-screen-md mx-auto p-4">
                <form>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="py-2">
                          <label htmlFor="category" className="block text-gray-700 font-semibold">Category/Tags:</label>
                        </td>
                        <td className="py-2">
                          <input type="text" id="category" name="category" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter categories or tags"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <label htmlFor="featuredImage" className="block text-gray-700 font-semibold">Featured Image Upload:</label>
                        </td>
                        <td className="py-2">
                          <input type="file" id="featuredImage" name="featuredImage" className="hidden"/>
                          <label for="featuredImage" className="cursor-pointer w-40 inline-block bg-blue-500 text-white text-center px-4 py-2 ml-3 rounded">Upload Image</label>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <label htmlFor="author" className="block text-gray-700 font-semibold">Author:</label>
                        </td>
                        <td class="py-2">
                          <input type="text" id="author" name="author" className="w-full p-2 border border-gray-300 rounded" placeholder="Enter author's name"/>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <label htmlFor="publicationDate" className="block text-gray-700 font-semibold">Publication Date:</label>
                        </td>
                        <td className="py-2">
                          <input type="date" id="publicationDate" name="publicationDate" className="w-full p-2 border mb-8 border-gray-300 rounded"/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>

        </form>
      </div>
    </div>
  )
}

export default Write