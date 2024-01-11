import React from 'react';

export const IndividualTemplate = ({ image }) => {
  return (
    <div className='template w-48 h-48 m-5 overflow-hidden'>
      <img
        src={image.urls.small}
        alt='template images'
        className='w-full h-full object-cover'
      />
    </div>
  );
};
