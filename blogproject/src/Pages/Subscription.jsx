import React, { useState } from 'react';
import axios from 'axios';
import { Images } from '../Components/Images';

const Subscription = () => {
  const [templateImages, setTemplateImages] = useState([]);

  const fetchTemplate = async () => {
    const response = await axios.get('https://api.unsplash.com/photos/?client_id=RdFaV8lXLF29m6aA34rVZ7Xl1fLUAdNGXweOf_zZvNQ');
    const data = await response.data;
    setTemplateImages(data);
  };

  return (
    <div>
    {/* <div className='py-40 bg-black text-center text-white px-4'>
      <h2 className='text-5xl lg:text=7xl leading-snug font-bold mb-5'> 
        Subscription Page
      </h2>
    </div> */}

      <div className="max-w-screen-lg mx-auto p-4 py-20">
        <div className="flex flex-col md:flex-row justify-center md:space-x-6">
          <button
            onClick={fetchTemplate}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-8 rounded mb-4 md:mb-0'>
            Template
          </button>
        </div>

            <div className='max-w-screen-lg mx-auto p-4'>
              <div className='flex flex-wrap -mx-4'>
                {templateImages.length > 0 && (
                  <Images images={templateImages} />
                )}
            </div>
          </div>

          <div className='max-w-screen-lg mx-auto p-4 mt-8 flex flex-wrap gap-4'>
        {/* Membership Offers Card */}
        <div className='bg-gray-200 p-6 h-1/2 rounded-xl flex-1'>
          <h3 className='text-2xl font-bold mb-4 text-center'>Medium Member</h3>
          <p className='text-center'>$5/month or $60/year</p>

          <ul className='mt-4'>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Read member-only stories</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Support writers you read most</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Earn money for your writing</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Listen to audio narrations</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Read offline with the Medium app</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Access our Mastodon community</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Connect your custom domain</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Create your own publications</li>
          </ul>

          <button className='text-white text-center font-semibold rounded-2xl bg-green-700 p-4 m-6'>Get Started</button>
        </div>


            {/* Buy Template Offers Card */}
            <div className='bg-gray-200 p-6 h-1/2 rounded-xl flex-1'>
          <h3 className='text-2xl font-bold mb-4 text-center'>Friend of Medium</h3>
          <p className='text-center'>$15/month or $150/year</p>

          <ul className='mt-4'>
            <li className='flex items-center mb-2'><span className='mt-3 mr-2'>⭐</span>All Medium member benefits</li>
            <li className='flex justify-center items-center mt-8 mb-8'>PLUS</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Writers earn 4x when you read their stories</li>
            <li className='flex items-center mb-2'><span className='text-green-500 mr-2'>✔</span>Share member-only stories with anyone and drive more earnings for writers</li>
          </ul>

          <button className='text-white text-center font-semibold rounded-2xl bg-green-700 p-4 m-6'>Get Started</button>
        </div>
          </div>
        </div>
      </div>
  
  );
};

export default Subscription;
