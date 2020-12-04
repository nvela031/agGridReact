import { REMOVE_ALL_POSTS, UPDATE_POSTS, REMOVE_POST_BY_ID } from "./Types";

export const updatePosts = (posts) => {
  return {
    type: UPDATE_POSTS,
    posts: posts,
  };
};

export const removePostById = (postId) => {
  return {
    type: REMOVE_POST_BY_ID,
    postId: postId,
  };
};

export const removeAllPosts = () => {
  return {
    type: REMOVE_ALL_POSTS,
    posts: [],
  };
};
