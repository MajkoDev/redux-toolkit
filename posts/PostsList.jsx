import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id} className="card">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}`}>View Post</Link>
    </article>
  ));

  return (
    <div>
      <h2>Posts</h2>
      {renderedPosts}
    </div>
  );
};

export default PostsList;
