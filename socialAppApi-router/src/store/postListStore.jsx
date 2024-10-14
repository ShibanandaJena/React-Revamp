import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: () =>{}
});

export const postListReducer = (currPostList, action) => {

    let newPost = currPostList;

    if (action.type === "ADD_POST") {
        newPost = [action.payload.dataFromInput,...currPostList]
    }

    else if (action.type === "DELETE_POST") {
        newPost = currPostList.filter(post => post.id !== action.payload.id)
    }

    else if (action.type === "ADD_INITIAL_POST"){
        newPost = [...action.payload.dataFromInput,...currPostList]
    }

    return newPost;
}

const PostListProvider = ({ children }) => {

    const [postList, dispatchPostlist] = useReducer(postListReducer, []);

    const addPost = (post) => {
        const newItemAction = 
            {
                type: "ADD_POST",
                payload: {
                    dataFromInput: post
                }
            }

        dispatchPostlist(newItemAction)
    }

    const deletePost = (id) => {
        const deleteItemAction = 
            {
                type: "DELETE_POST",
                payload: {
                    id: id
                }
            }

        dispatchPostlist(deleteItemAction)
    }

    const addInitialPosts = (posts) => {
        const newInitialItemAction = 
            {
                type: "ADD_INITIAL_POST",
                payload: {
                    dataFromInput: posts
                }
            }

        dispatchPostlist(newInitialItemAction)
    }

    return <PostList.Provider value={{
        postList,
        addPost,
        deletePost,
        addInitialPosts

    }}>{children}</PostList.Provider >
}

export default PostListProvider;

