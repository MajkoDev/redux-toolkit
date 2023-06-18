import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const SinglePostPage = () => {
  const params = useParams();

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === params.id)
  )

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
      <p className="post-content">{post.content}</p>
    </article>
  );
};

export default SinglePostPage;
