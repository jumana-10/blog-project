import React from 'react'

const Profile = () => {

  return (
    <div>
      {/* <div className='py-40 bg-black text-center text-white px-4'>
        <h2 className='text-5xl lg:text=7xl leading-snug font-bold mb-5'> 
          Profile Page
        </h2>
      </div> */}

      {/* profile update */}
      <div className="max-w-screen-lg mx-auto p-4 mt-8 py-16">
        <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-8">
          
        <div className="mb-4 md:mb-0">
          <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden aspect-w-1 aspect-h-1">
            <img 
              src="https://images.unsplash.com/photo-1603029084766-3ddc1c5c7e94?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              alt="Author" 
              className="object-cover w-full h-full" 
            />
          </div>
        </div>

          <div>
            <h1 className="text-2xl md:text-3xl font-bold mt-4 mb-2">Jumana</h1>
            <p className="text-gray-600">Web Developer and Blogger. Passionate about technology and design. Bringing you insightful articles on web development and more.</p>
            <button className="mt-4 mb-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Expertise and Interests</h2>
          <p className='ml-6'>Web Development, UI/UX Design, JavaScript, React, Blogging</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Achievements and Credentials</h2>
          <p className='ml-6'>Certified Web Developer, Winner of Blogging Excellence Award 2022</p>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Contact Information</h2>
          <p className='cursor-pointer ml-6'>Email: jumana@example.com</p>
          <p className='cursor-pointer ml-6'>Twitter : <a className="text-blue-500 cursor-pointer">twitter.com/jumana</a></p>
          <p className='cursor-pointer ml-6'>Facebook : <a className="text-blue-500 cursor-pointer">Jumana_Blog</a></p>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-2">Author's Blog Posts</h2>
          <ul className="list-disc ml-6 pl-4">
            <li><a className="text-blue-500 cursor-pointer">Post 1: Web Development Tips</a></li>
            <li><a className="text-blue-500 cursor-pointer">Post 2: The Future of Design</a></li>
            <li><a className="text-blue-500 cursor-pointer">Post 3: Exploring JavaScript Frameworks</a></li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mt-5 mb-2">Book Recommendations</h2>
          <p>
            <span className='font-semibold ml-6'> 1. "Eloquent JavaScript" </span> by Marijn Haverbeke
          </p>
          <p>
            <span className='font-semibold ml-6'> 2. "You Don't Know JS" </span> by Kyle Simpson
          </p>
        </div>
      </div>

    </div>
  )
}

export default Profile