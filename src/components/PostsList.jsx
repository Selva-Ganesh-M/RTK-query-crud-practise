import React from "react";
import { useDeletePostMutation, useGetPostsQuery } from "../api/apiSlice";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetPostsQuery();
  const [deletePost] = useDeletePostMutation();

  //   RENDER CONTENT
  let content;
  if (isSuccess) {
    content = posts.map((post) => (
      <article
        style={{
          margin: "1em",
          padding: "1em",
          border: "2px solid black",
          display: "flex",
          justifyContent: "space-between",
        }}
        key={post.id}
      >
        <div>{post.title}</div>
        <span
          style={{ color: "red", fontWeight: "bold" }}
          onClick={() => {
            console.log("clicked");
            deletePost(post.id);
          }}
        >
          Delete
        </span>
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
