'use client'
import React, { useEffect, useState } from 'react';
import './mediumArticleCSS.css'

interface Blog {
  title: string;
  content: string;
  slug: string;
  author: string;
  published: string;
  pubAgo: string;
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
    fetch(`https://www.harpreetwasu.com/backend/api.php?action=fetchArticles&slug=${params.slug}`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched blog data:', JSON.stringify(data)); 
        setBlog(data[0]);
        setLoading(false); 
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
        setLoading(false); 
      });
  }, [params.slug]);

  useEffect(() => {
    if (blog) {
      fetch(`https://www.harpreetwasu.com/backend/api.php?action=fetchRelatedBlogs&slug=${params.slug}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched related blogs:', JSON.stringify(data));
          const filteredRelatedBlogs = data.filter((relatedBlog: Blog) => relatedBlog.slug !== blog.slug);
          setRelatedBlogs(filteredRelatedBlogs);
        })
        .catch(error => console.error('Error fetching related blogs:', error));
    }
  }, [blog, params.slug]);

  return (
    <section className="container max-w-[700px] m-auto mb-5">
      {loading ? ( 
         <section className='w-full'>
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
          <div className="w-full m-auto mb-4">
            <div className="w-full flex flex-col">
              {blog && (
                <div>
                  <p className='text-sm mb-2'>{blog.pubAgo}</p>
                  <h3 className="text-h3 font-bold mb-8">{blog.title}</h3>
                  <div className='text-paragraph mediumBlogContent' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
                </div>
              )}
            </div>
          </div>
          <div className="container m-auto w-full">
            <h4 className="text-h4 font-bold mb-4">Related Blogs</h4>
            <div className="grid grid-cols-3 gap-4">
              {relatedBlogs.map(relatedBlog => (
                <div key={relatedBlog.slug}>
                  <h4 className="text-md font-bold">{relatedBlog.title}</h4>
                  {/* Add more details or links to related blogs if needed */}
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </section>
  );
};

export default BlogDetails;
