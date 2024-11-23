import React, { useState } from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({
  $id,
  title,
  featuredImage
}) {


  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const handleUpvote = () => {
    setUpvoted(!upvoted);
    if (downvoted) setDownvoted(false); // Ensure downvote is reset if upvoted
  };

  const handleDownvote = () => {
    setDownvoted(!downvoted);
    if (upvoted) setUpvoted(false); // Ensure upvote is reset if downvoted
  };


  return (
      <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
        <div className="bg-gray-800 p-4">
          <h2 className="text-white text-lg font-bold">r/ExampleSubreddit</h2>
          <p className="text-gray-400 text-sm">Posted by u/username</p>
        </div>
        <Link to={`/post/${$id}`}>
          <div className="p-4">
            <h3 className="text-gray-900 font-bold text-xl mb-2">{title}</h3>
          </div>
          <img className="w-full h-72 object-contain" src={service.getFilePreview(featuredImage)} alt="Post image" />
          <div className="p-4">
            <p className="text-gray-700 text-base">This is a description of the post. It provides more details and context about the content of the post.</p>
          </div>
        </Link>
        <div className="bg-gray-100 p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button
              onClick={handleUpvote}
              className={`text-gray-600 hover:text-gray-800 ${upvoted ? 'text-orange-500' : ''}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </button>
            <span className="text-gray-600">123</span>
            <button
              onClick={handleDownvote}
              className={`text-gray-600 hover:text-gray-800 ${downvoted ? 'text-blue-500' : ''}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2v-10a2 2 0 012-2zm-4 0H7m10 0v12m0-12H7m0 12H5a2 2 0 01-2-2V10a2 2 0 012-2h2v12zm0 0V8"></path>
              </svg>
            </button>
            <span className="text-gray-600">Comments</span>
          </div>
        </div>
      </div>
  )
}

export default PostCard