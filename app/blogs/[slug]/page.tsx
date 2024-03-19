'use client'
import React, { useEffect, useState } from 'react';
import './mediumArticleCSS.css'
import { PiStarFourFill } from "react-icons/pi";

interface Blog {
  title: string;
  content: string;
  slug: string;
  author: string;
  published: string;
  pubAgo: string;
  categories: string[];
  status: string;
  readingTime: any;
  thumbnailImage: string;
}

interface Params {
  slug: string;
}

const BlogDetails: React.FC<{ params: Params }> = ({ params }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
	  setLoading(true); 
	  fetch(`http://85.31.225.54/backend/detail.php?action=fetchDetailArticles&slug=${params.slug}`)
		.then(response => response.json())
		.then(data => {
		  console.log('Fetched blog data:', JSON.stringify(data)); 
		  const sanitizedContent = data[0].content.replace(/<img[^>]+>/g, (match) => {
			if (match.includes('src="') && !match.includes('onerror="this.remove()"')) {
			  return match.replace('src="', 'onerror="this.remove()" src="');
			}
			return match;
		  });
		  data[0].content = sanitizedContent;
		  setBlog(data[0]);
		  setLoading(false); 
		})
		.catch(error => {
		  console.error('Error fetching blog details:', error);
		  setLoading(false); 
		});
	}, [params.slug]);

  
  
	useEffect(() => {
	  if (blog && blog.categories) {
		const categoriesQuery = blog.categories.map(category => `category=${category}`).join('&');
		fetch(`http://85.31.225.54/backend/api.php?action=fetchArticles&${categoriesQuery}`)
		  .then(response => response.json())
		  .then(data => {
			console.log('Fetched related blogs:', JSON.stringify(data));
			const filteredRelatedBlogs = data.filter((relatedBlog: Blog) => relatedBlog.slug !== blog.slug);
			setRelatedBlogs(filteredRelatedBlogs);
		  })
		  .catch(error => console.error('Error fetching related blogs:', error));
	  }
	}, [blog]);

/* 	useEffect(() => {
	  if (blog && blog.categories) {
		const categoriesQuery = blog.categories.map(category => `category=${category}`).join('&');
		fetch(`http://85.31.225.54/backend/api.php?action=fetchArticles&${categoriesQuery}`)
		  .then(response => response.json())
		  .then(data => {
			console.log('Fetched related blogs:', JSON.stringify(data));
			const relatedBlogsWithStatus = data.map((relatedBlog: Blog) => {
			  return fetch(`http://85.31.225.54/backend/api.php?action=getStatus&slug=${relatedBlog.slug}`)
				.then(response => response.json())
				.then(statusData => {
				  return { ...relatedBlog, status: statusData.status };
				})
				.catch(error => {
				  console.error('Error fetching status for related blog:', error);
				  return relatedBlog;
				});
			});
			Promise.all(relatedBlogsWithStatus)
			  .then(updatedRelatedBlogs => {
				const filteredRelatedBlogs = updatedRelatedBlogs.filter((relatedBlog: Blog) => relatedBlog.slug !== blog.slug);
				setRelatedBlogs(filteredRelatedBlogs);
			  })
			  .catch(error => console.error('Error fetching status for related blogs:', error));
		  })
		  .catch(error => console.error('Error fetching related blogs:', error));
	  }
	}, [blog]); */

  return (
  <React.Fragment>
    <section className="container max-w-[700px] m-auto mb-5">
    <div className='flex flex-nowrap text-[12px] opacity-50 pb-8 pt-2 max554px:px-4 max554px:flex-wrap max554px:gap-2'>
        <a href="/" className='underline underline-offset-4'>Home</a>
        <span className='px-2'>/</span>
        <a href="/blogs" className='underline underline-offset-4'>Blogs</a>
        <span className='px-2'>/</span>
        {loading ? (
            <span className='w-48 h-6 rounded-md animate-pulse'></span>
        ) : (
          blog && blog.title
        )}
    </div>

      {loading ? ( 
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
        <div className="w-full m-auto mb-4">
          <div className="w-full flex flex-col">
            {blog && (
              <div className='max554px:px-4'>
                <p className='text-sm mb-2'>{blog.pubAgo}<span className='px-2'>·</span>{blog.readingTime}</p>
                <h3 className="text-h3 font-bold mb-8 max554px:font-black">{blog.title}</h3>
                <div className='text-paragraph mediumBlogContent' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>

    {/* Related Blogs Section Outside Container */}
    {!loading && (
      <section className="container max-w-[700px] m-auto mb-5 pt-8 border border-t-[#eeeeee] border-r-0 border-l-0 border-b-0 dark:border-t-[#333333]/80">
        <div className="container m-auto w-full">
          <h4 className="text-h4 font-bold mb-4">More Writings By Harpreet</h4>
          <div className="grid grid-cols-2 gap-8 max709px:grid-cols-1 max554px:px-4 mb-40">
              {relatedBlogs.map((relatedBlog, index) => (
                <a key={index} href={relatedBlog.status === 'Free' ? `/blogs/${relatedBlog.slug}` : relatedBlog.link} target={relatedBlog.status === 'Free' ? '_self' : '_blank'} style={{ cursor: "pointer" }}>
                  {relatedBlog.thumbnailImage ? (
                    <div className="flex justify-center items-center mb-4 rounded-xl max-md:ml-0 bg-[#fbf3fd] dark:bg-[#2c0230]">
                      <img src={relatedBlog.thumbnailImage} alt={relatedBlog.slug} className="h-auto max-w-full object-cover w-full max-h-48" />
                    </div>
                  ) : (
                    <div className="flex justify-center items-center mb-4 rounded-xl max-md:ml-0 bg-[#fbf3fd] dark:bg-[#2c0230]">
                      <div className="h-auto max-w-full object-cover w-full h-48 max-h-48"></div>
                    </div>
                  )}
                  <h4 className="text-md font-bold">{relatedBlog.title}</h4>
                  <div className='flex flex-nowrap items-center'>
                      {relatedBlog.status === "Premium" && (
                                <>
                                  <span className='flex items-center gap-x-2'>
                                    <PiStarFourFill color="#FEC016" />
                                  </span><span className='px-2'>·</span>
                                </>
                      )}
                      <p className='text-sm my-2 opacity-80'>{relatedBlog.pubAgo}
                          {relatedBlog.status === "Free" && 
                            <>
                              <span className='px-2'>·</span>{relatedBlog.readingTime}
                            </>
                          }
                      </p>
                  </div>
                  {/* Add more details or links to related blogs if needed */}
                </a>
              ))}
          </div>
        </div>
      </section>
    )}
  </React.Fragment>
);

};

export default BlogDetails;
