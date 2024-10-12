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

const def_post = [
    {
        id: 1,
        title: "Sunset at the Beach",
        summary: "The most breathtaking sunset I’ve ever seen. 🌅 Beach vibes!",
        reactions: 320,
        userId: 101,
        tags: ["sunset", "beach", "nature", "photography"],
        postDuration: "1 day(s) ago" // Example duration
      },
      {
        id: 2,
        title: "Fitness Journey Day 100 💪",
        summary: "100 days of hard work and dedication. Feeling stronger every day!",
        reactions: 540,
        userId: 102,
        tags: ["fitness", "workout", "motivation", "fitlife"],
        postDuration: "2 day(s) ago" // Example duration
      }
      
]
export default PostListProvider;

