import React from "react";
import { useGetPostsQuery } from "../api/apiSlice";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetPostsQuery();

  //   RENDER CONTENT
  let content;
  if (isSuccess) {
    content = posts.map((post) => (
      <article
        style={{
          margin: "1em",
          padding: "1em",
          border: "2px solid black",
        }}
        key={post.id}
      >
        {post.title}
      </article>
    ));
  } else if (isLoading) {
    content = "loading";
  } else if (isError) {
    content = error;
  }

  //   ACTUAL RENDERING
  return content;
};

export default PostsList;
