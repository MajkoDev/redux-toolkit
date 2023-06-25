import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    .slice()
    // creates a shallow copy of the array. 
    // prevents the original from being modified.
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const renderPosts = orderedPosts.map((post) => (
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
        <ReactionButtons post={post} />
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
