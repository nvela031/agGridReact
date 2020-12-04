import {
  UPDATE_POSTS,
  REMOVE_ALL_POSTS,
  REMOVE_POST_BY_ID,
} from "../actions/Types";

const initialState = {
  posts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };
    case REMOVE_POST_BY_ID:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    case REMOVE_ALL_POSTS:
      return {
        ...state,
        posts: [],
      };
    default:
      return state;
  }
};
