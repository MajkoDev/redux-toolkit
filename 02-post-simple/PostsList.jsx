import React from "react";
import { useSelector } from "react-redux";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => (
    <article key={post.id} className="post-cart">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));

  return (
    <div className="container">
      <h2>Posts List</h2>
      <p>
        React components that can read data from the Redux store and dispatch
        actions to update that data.
      </p>
      {renderPosts}
    </div>
  );
};

export default PostsList;
