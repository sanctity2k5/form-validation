"use client";


import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data for posts
    fetch('http://localhost:3001/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));

    // Fetch data for comments
    fetch('http://localhost:3001/comments')
      .then((response) => response.json())
      .then((data) => setComments(data));

    // Fetch data for users
    fetch('http://localhost:3001/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const cardStyle = "bg-white rounded-lg shadow-md p-6 mb-8";

  return (
    <div className="container mx-auto mt-8">
      <div className={cardStyle}>
        <h1 className="text-3xl font-semibold mb-4 text-blue-600">Users</h1>
        <ul className="list-disc pl-6">
          {users.map((user) => (
            <>
            <li key={user.id} className="mb-2 text-gray-700">
              <h1>{user.name}</h1>
            </li>
            <li key={user.id} className="mb-2 text-gray-700">
             <strong>Email: {user.email}</strong>
            </li>
            </>
          ))}
        </ul>
      </div>

      <div className={cardStyle}>
        <h1 className="text-3xl font-semibold mb-4 text-blue-600">Posts</h1>
        <ul className="list-disc pl-6">
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <strong className="text-indigo-700">{post.title}</strong>
              <p className="mt-2 text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={cardStyle}>
        <h1 className="text-3xl font-semibold mb-4 text-blue-600">Comments</h1>
        <ul className="list-disc pl-6">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4">
              <strong className="text-indigo-700">User ID {comment.userId}</strong> commented on Post ID {comment.postId}
              <p className="mt-2 text-gray-700">{comment.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
