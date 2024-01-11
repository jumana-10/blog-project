import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { FaClock, FaUser } from "react-icons/fa";
import Sidebar from '../Components/Sidebar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];
    console.log(data)

  return (
    <div>
        <div className='py-36 bg-black text-center text-white px-4'>
            <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'> 
            Single Blog
            </h2>
        </div>

        {/* blog details */}

        <div className='max-w-7xl mx-auto my-12 flex-col md:flex-row gap-12'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt='image' className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-blue-500 cursor-pointer'>{title}</h2>

                <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2' /> 
                {author} | {published_date}</p>

                <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2' /> 
                {reading_time}</p>

                <p className='text-base text-gray-500 mb-6'>{content}</p>

                <div className='mb-4 p-4 rounded font-serif'>
                    <p className='text-base mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti possimus
                         repellendus rerum assumenda ab sint repudiandae provident minus neque facilis?</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis repellat vel sequi minus laudantium hic accusantium ipsam quaerat consequatur. 
                        Natus illum vitae nihil suscipit totam enim? Necessitatibus nisi voluptates cum.</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id dolore dolorem quo veritatis cupiditate
                         neque officiis nulla soluta possimus saepe corporis illum aperiam, autem, deserunt facere. Voluptate repellendus
                          tempore obcaecati facere. Blanditiis assumenda, nulla similique minima
                         culpa beatae eveniet optio reprehenderit cum, rerum quidem, ab ipsam id soluta deserunt.</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio nulla ipsa id recusandae molestias labore omnis vitae minus soluta.
                         Rem sunt quod ipsam quam dicta quisquam repellendus harum architecto ex cupiditate. Pariatur provident optio eum hic quas vitae similique.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis quisquam ratione mollitia? Consequatur assumenda sit quo omnis, quasi doloribus.</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed fugit, voluptate, a dolorem reprehenderit ipsa inventore asperiores quidem repudiandae 
                        quis libero, repellendus vel. Pariatur, nihil voluptatem quisquam similique voluptatum eveniet unde excepturi voluptates doloribus! Rem consequatur libero, 
                        quo eaque iste ipsa tenetur iusto quidem quis. Quos sit iste dolor eos fuga excepturi nihil dicta, vero facere quod perspiciatis nesciunt!</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto optio nemo animi aspernatur vero architecto at quam ut? Porro, praesentium accusamus. 
                        Quia laudantium ipsum doloribus facere labore corporis modi dicta odit laborum asperiores, quam quod voluptatibus dolor id error unde, culpa, architecto
                         quae porro! Hic culpa omnis similique? Excepturi!</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi id dolore dolorem quo veritatis cupiditate
                         neque officiis nulla soluta possimus saepe corporis illum aperiam, autem, deserunt facere. Voluptate repellendus
                          tempore obcaecati facere. Blanditiis assumenda, nulla similique minima
                         culpa beatae eveniet optio reprehenderit cum, rerum quidem, ab ipsam id soluta deserunt.</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odio nulla ipsa id recusandae molestias labore omnis vitae minus soluta.
                         Rem sunt quod ipsam quam dicta quisquam repellendus harum architecto ex cupiditate. Pariatur provident optio eum hic quas vitae similique.
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus debitis quisquam ratione mollitia? Consequatur assumenda sit quo omnis, quasi doloribus.</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sed fugit, voluptate, a dolorem reprehenderit ipsa inventore asperiores quidem repudiandae 
                        quis libero, repellendus vel. Pariatur, nihil voluptatem quisquam similique voluptatum eveniet unde excepturi voluptates doloribus! Rem consequatur libero, 
                        quo eaque iste ipsa tenetur iusto quidem quis. Quos sit iste dolor eos fuga excepturi nihil dicta, vero facere quod perspiciatis nesciunt!</p>

                    <p className='text-base mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto optio nemo animi aspernatur vero architecto at quam ut? Porro, praesentium accusamus. 
                        Quia laudantium ipsum doloribus facere labore corporis modi dicta odit laborum asperiores, quam quod voluptatibus dolor id error unde, culpa, architecto
                         quae porro! Hic culpa omnis similique? Excepturi!</p>
                </div>
            </div>

            <div className='lg:w-1/2'>
                <Sidebar />
            </div>
        </div>
    </div>
  )
}

export default SingleBlog