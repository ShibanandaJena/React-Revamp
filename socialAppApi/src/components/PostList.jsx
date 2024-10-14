import React, { useContext, useEffect, useState } from 'react'
import PostCard from './PostCard'
import { PostList as PostListData } from '../store/postListStore'
import WelcomeMsg from './WelcomeMsg'
import Loader from './Loader'


function PostList() {
    const { postList,addInitialPosts } = useContext(PostListData)
    const [loading , setLoading] = useState(false)

    useEffect(()=>{

        setLoading(true)
         fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => {
            const transformedPosts = data.posts.map(post => ({
              id: post.id,
              title: post.title,
              summary: post.body, // Map `body` to `summary`
              reactions: post.reactions.likes - post.reactions.dislikes, // Calculate reactions
              userId: post.userId,
              tags: post.tags,
              postDuration: `${Math.floor(Math.random() * 5) + 1} day(s) ago` // Example duration, you can replace this
            }))

            addInitialPosts(transformedPosts);
            setLoading(false)
        })
    },[])

    return (
        <>
            <div className="post-container">
                {loading && <Loader/>}
                {!loading && postList.length === 0 && <WelcomeMsg ></WelcomeMsg>}
                {!loading && postList.map((post,index) => (
                    <PostCard 
                        post={post} 
                        key={index}
                        ></PostCard>
                ))}


            </div>

        </>

    )
}

export default PostList