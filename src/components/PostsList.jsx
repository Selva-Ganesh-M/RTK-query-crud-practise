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
  return JSON.stringify(posts);
};

export default PostsList;
