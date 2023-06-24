import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const renderPosts = posts.map((post) => (
    <article key={post.id} className="cart-small">
      <h3>{post.title}</h3>
      <PostAuthor userId={post.user} />
      <br />
      <p>{post.content}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TimeAgo timestamp={post.date} />
        <Link to={`/posts/${post.id}`} className="button">
          View Post
        </Link>
      </div>
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
