import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import Sidebar from './Sidebar';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12 //blogs per page
  const [ selectedCategory, setSelectedCategory ] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      // let url = `https://jsonplaceholder.typicode.com/posts`;
      let url = `/Api/api/blogsData.json?pages=${currentPage}&limit=${pageSize}`;

      //filter by category
      if(selectedCategory){
        url += `&category = ${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }
    
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory])

  //page changing button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  }

  return (
    <div>
      {/* category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory}
        activeCategory={activeCategory} />
      </div>

      {/* blogCards */}
      <div className='flex flex-co lg:flex-row gap-12'>
        {/* blog card component */}
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} 
        pageSize={pageSize}/>

        {/* sideNav section */}
        <div>
          <Sidebar />
        </div>
      </div>

      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} CurrentPage={currentPage} blogs={blogs} pageSize={pageSize} />
      </div>
    </div>
  )
}

export default BlogPage