import React, { useContext } from 'react'
import { PostList } from '../store/postListStore'
import { MdDeleteOutline } from "react-icons/md";


function PostCard({ post }) {
    const {deletePost} = useContext(PostList)
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">
                    {post.title} <span style={{ fontSize: "0.8em", color: "gray" }}>{post.postDuration}</span>
                </h5>                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {post.reactions}
                </span>
                <button className="btn btn-light position-absolute bottom-0 end-0 me-2 mb-2" onClick={()=>deletePost(post.id)}>
                <MdDeleteOutline />

    </button>
                <p className="card-text">
                    {post.summary}
                </p>
                {post.tags.map((tag, index) => (
                    <span className="badge rounded-pill bg-info text-dark mx-1" key={index}>{tag}</span>
                ))}


            </div>
        </div>


    )
}

export default PostCard