//import React from 'react'

const Blog = () => {
  return (
    <div className="px-4 my-12">
      <section className=" pt-20 pb-8 pl-8 pr-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-purple-800 mb-6">Library Blog</h2>
      <p className="text-gray-700 mb-6">
        Stay updated with the latest from our library. From book recommendations to reading tips, our blog is here to keep you informed and inspired.
      </p>
      
      <div className="blog-posts space-y-6">
        <article className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">Top 5 Must-Read Books This Month</h3>
          <p className="text-gray-600 leading-relaxed">
            Dive into our handpicked selection of must-read books for this month. Perfect for those looking for a new adventure or a thought-provoking read.
          </p>
          <button className="mt-4 text-purple-600 font-medium hover:text-purple-800">Read More</button>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">Library Tips: How to Maximize Your Reading Experience</h3>
          <p className="text-gray-600 leading-relaxed">
            Discover our top tips for making the most of your time with books, including ways to stay focused, track progress, and build a reading habit.
          </p>
          <button className="mt-4 text-purple-600 font-medium hover:text-purple-800">Read More</button>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-2xl font-semibold text-purple-700 mb-2">Upcoming Events: Join Us for Book Club and More</h3>
          <p className="text-gray-600 leading-relaxed">
            Exciting events are happening at our library! Join us for monthly book clubs, author talks, and more. Come connect with fellow book lovers.
          </p>
          <button className="mt-4 text-purple-600 font-medium hover:text-purple-800">Read More</button>
        </article>
      </div>
    </section>
      </div>
  )
}

export default Blog
