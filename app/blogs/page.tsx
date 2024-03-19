'use client'
import React, { useEffect, useState, useRef } from 'react';
import { PiStarFourFill } from "react-icons/pi";

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
        const response = await fetch(`http://85.31.225.54/backend/api.php?action=fetchArticles`);
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
    <div className="container max-w-[700px] m-auto mx-auto mb-5">
      <div className='text-h3 font-bold pt-12 pb-4 px-4 border border-t-0 border-r-0 border-l-0 border-b-[#eeeeee] dark:border-b-[#333333]/5'>Harpreet Wasu Blogs</div>
      {loading ? (
        // <div className="top-0 left-0 w-full h-full flex items-center justify-center">
        //   <img src="spinner.gif" alt="Loading spinner" className="spinner" />
        // </div>
        <section className='w-full flex flex-col gap-y-4 mb-40'>
            <div className="p-4 rounded-md mb-8 w-full animate-pulse">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="h-10 w-full bgInvert opacity-10 mb-4 rounded-md"></div>
                        <div className='h-6 w-full bgInvert opacity-10 mb-3 rounded-md'></div>
                        <div className='h-6 w-80 bgInvert opacity-10 mb-3 rounded-md'></div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full bgInvert opacity-10 rounded-md">
                    <div className='max-w-[800px] h-[500px]'></div>
                </div>
            </div>
            <div className="p-4 rounded-md mb-8 w-full animate-pulse">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="h-10 w-full bgInvert opacity-10 mb-4 rounded-md"></div>
                        <div className='h-6 w-full bgInvert opacity-10 mb-3 rounded-md'></div>
                        <div className='h-6 w-80 bgInvert opacity-10 mb-3 rounded-md'></div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full bgInvert opacity-10 rounded-md">
                    <div className='max-w-[800px] h-[500px]'></div>
                </div>
            </div>
            <div className="p-4 rounded-md mb-8 w-full animate-pulse">
                <div className="flex flex-col justify-between">
                    <div>
                        <div className="h-10 w-full bgInvert opacity-10 mb-4 rounded-md"></div>
                        <div className='h-6 w-full bgInvert opacity-10 mb-3 rounded-md'></div>
                        <div className='h-6 w-80 bgInvert opacity-10 mb-3 rounded-md'></div>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full bgInvert opacity-10 rounded-md">
                    <div className='max-w-[800px] h-[500px]'></div>
                </div>
            </div>
        </section>
      ) : (
        <React.Fragment>
          <section className="max-w-[700px] m-auto mb-20">
          {currentBlogs.map((blog: any, index: number) => (
            <div key={blog.id} className="border border-t-0 border-r-0 border-l-0 border-b-[#eeeeee] dark:border-b-[#333333]/50">
              <a href={blog.status === "Premium" ? blog.link : `/blogs/${blog.slug}`} target={blog.status === "Premium" ? "_blank" : "_self"} className="cursor-pointer my-2">
                <div ref={index === currentBlogs.length - 1 ? observerRef : null} className="px-4 pt-8 pb-4 rounded-md flex items-center max-md:flex-col">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className='flex items-center mb-2.5 mr-2'>
                          <p className='text-sm pr-3'>{blog.pubAgo}</p>
                          {blog.status === "Premium" && (
                            <span className='flex items-center gap-x-2'>
                              <PiStarFourFill color="#FEC016" /> Member-only
                            </span>
                          )}
                          {blog.status === "Free" && <p className='text-sm'><span className='pr-2'>·</span>{blog.readingTime}</p>}
                      </div>
                      <h4 className="text-paragraph font-bold mb-2">{blog.title}</h4>
                      <p className='text-base opacity-80 mb-2'>{stripHtmlTags(blog.content).length > 120 ? stripHtmlTags(blog.content).slice(0, 120) + '...' : stripHtmlTags(blog.content)}</p>
                    </div>
                  </div>
                  {blog.thumbnailImage && (
                    <div className="flex justify-center items-center ml-12 max-md:ml-0">
                      <img src={blog.thumbnailImage} alt={blog.slug} className="h-auto max-w-full object-cover max-w-40" />
                    </div>
                  )}
                </div>
              </a>
              {/* Reading time outside anchor tag */}
              {blog.categories && (
                  <div className="flex flex-wrap px-4 pb-8">
                    {blog.categories.map((blogCategory:any, index: number) => (
                      <div key={blogCategory.id} className="mr-2 my-2">
                        <div className="py-1 px-4 rounded-2xl bg-[#fbf3fd] dark:bg-[#2c0230]">
                          <span>{blogCategory}</span>
                        </div>
                      </div>
                    ))}
                  </div>
              )}
            </div>
          ))}
        </section>
          <div className="max-parent-grid-container-width flex justify-center mt-4 mb-40">
            {Array.from({ length: Math.ceil(blogs.length / blogsPerPage) }, (_, i) => (
              <button key={i} onClick={() => paginate(i + 1)} className="mx-1 px-3 py-1 rounded-md bgColorGlobal textColorGlobal">{i + 1}</button>
            ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default BlogList;
