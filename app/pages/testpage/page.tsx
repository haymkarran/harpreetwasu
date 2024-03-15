import React from 'react'

const page = () => {
  return (
    <section className='max-parent-grid-container-width'>
    <div className="p-4 rounded-md mb-8 w-full animate-pulse">
          <div className="flex flex-col justify-between">
            <div>
              <div className="h-10 w-full bg-white mb-4 rounded-md"></div>
              <div className='h-6 w-full bg-white mb-3 rounded-md'></div>
              <div className='h-6 w-80 bg-white mb-3 rounded-md'></div>
            </div>
            <div></div>
          </div>
          <div className="flex justify-center items-center w-full bg-white rounded-md">
             {/* cover image */}
             <div className='max-w-[800px] h-[500px]'></div>
          </div>
      </div>
</section>
  )
}

export default page
