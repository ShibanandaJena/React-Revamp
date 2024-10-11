import React, { useContext } from 'react'
import PostCard from './PostCard'
import { PostList as PostListData } from '../store/postListStore'


function PostList() {
    const { postList } = useContext(PostListData)
    return (
        <>
            <div className="post-container">
                {postList.map((post,index) => (
                    <PostCard post={post} key={index}></PostCard>
                ))}


            </div>

        </>

    )
}

export default PostList