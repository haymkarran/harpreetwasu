'use client'
import React, { useEffect, useState, useRef } from 'react';
import classes from './blogs.css';

const BlogList: React.FC = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [observer, setObserver] = useState<any>(null); // State for Intersection Observer
  const blogsPerPage = 6;
  const observerRef = useRef<HTMLDivElement>(null); // Ref for the last blog element

  useEffect(() => {
    // Function to fetch blogs from API
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`https://www.harpreetwasu.com/backend/api.php?action=fetchArticles`);
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setLoading(false);
      }
    };

    fetchBlogs();

    // Initialize Intersection Observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const newObserver = new IntersectionObserver(handleObserver, options);
    setObserver(newObserver);

    // Clean up function
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  // Intersection Observer callback function
  const handleObserver = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadMoreBlogs();
        observer.unobserve(entry.target);
      }
    });
  };

  // Function to load more blogs
  const loadMoreBlogs = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
  }, [observer]);

  // Function to strip HTML tags from content
  const stripHtmlTags = (html: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // Logic to get current blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Function to handle pagination
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto mb-5">
      {loading ? (
        <div className="spinner-container top-0 left-0 w-full h-full flex items-center justify-center bg-white opacity-75">
          <img src="spinner.gif" alt="Loading spinner" className="spinner" />
        </div>
      ) : (
        <React.Fragment>
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
            {currentBlogs.map((blog: any, index: number) => (
              <a href={`/blogs/${blog.slug}`} className="text-blck-500 mt-2 mb-4" key={blog.id}>
                <div ref={index === currentBlogs.length - 1 ? observerRef : null} className="p-4 rounded-md col-span-12 md:col-span-6 md:flex">
                  <div className="md:col-span-6 flex flex-col justify-between">
                    <div>
                      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                      <p>{stripHtmlTags(blog.content).length > 300 ? stripHtmlTags(blog.content).slice(0, 300) + '...' : stripHtmlTags(blog.content)}</p>
                    </div>
                    <div></div>
                  </div>
                  <div className="md:col-span-6 flex justify-center items-center">
                    <img src={blog.thumbnailImage} alt={blog.slug} className="h-auto max-w-full" />
                  </div>
                </div>
              </a>
            ))}
          </section>
          <div className="flex justify-center mt-4 mb-4">
            {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)} className="mx-1 px-3 py-1 rounded-md bg-blue-500 text-white">{i + 1}</button>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default BlogList;
