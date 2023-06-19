import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => (
    <article key={post.id} className="post-cart">
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <p>{post.content}</p>
      <Link to={`/posts/${post.id}`}>View Post</Link>
    </article>
  ));

  return (
    <div className="container">
      <h2>Posts List</h2>
      <p>
        Viewing a single post, editing existing posts, showing post author
        details, post timestamps, and reaction buttons.
      </p>
      {renderPosts}
    </div>
  );
};

export default PostsList;
