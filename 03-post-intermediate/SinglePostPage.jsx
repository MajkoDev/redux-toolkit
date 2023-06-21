import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const SinglePostPage = () => {
  const params = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === params.id)
  );

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <PostAuthor userId={post.user} />
      <br />
      <TimeAgo timestamp={post.date} />
      <br />
      <p className="post-content">{post.content}</p>
      <Link to={`/edit/${post.id}`} className="button">
        Edit Post
      </Link>
    </article>
  );
};

export default SinglePostPage;
