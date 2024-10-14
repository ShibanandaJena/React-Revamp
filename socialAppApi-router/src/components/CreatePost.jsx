import React, { useContext, useRef } from 'react'
import { PostList } from '../store/postListStore'
import { useNavigate, Form, redirect } from 'react-router-dom';

function CreatePost() {
    // const {addPost} = useContext(PostList)
    // const navigate = useNavigate()

    // const titleRef = useRef();
    // const summaryRef = useRef();
    // const reactionsRef = useRef();
    // const tagRef = useRef();



    // Function to get all the input parameter
    const formSubmit = (e) => {
        // e.preventDefault();
        // const title= titleRef.current.value;
        // const summary= summaryRef.current.value;
        // const reactions= reactionsRef.current.value
        // const tagInput= tagRef.current.value

        // const tagString = tagInput;
        // const tags = tagString.split(',').map(tag => tag.trim());
        // const postDate = new Date();
        // const id = getNextId();
        // const userId = getNextUserId();



        // titleRef.current.value=""
        // summaryRef.current.value=""
        // reactionsRef.current.value=""
        // tagRef.current.value=""

    }
    return (
        <div className="form-container" style={{ padding: "5px", margin: "5px" }}>
            <Form method='POST' className="p-4 border rounded bg-light" >
                <div className="mb-3">

                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        placeholder="Enter Title"
                        name='title'
                    />
                </div>

                <div className="mb-3">

                    <textarea
                        name="summary"
                        className="form-control"
                        id="summary"
                        rows="3"
                        placeholder="Enter Summary"

                    ></textarea>
                </div>

                <div className="mb-3">

                    <input
                        type="number"
                        className="form-control"
                        id="reactions"
                        placeholder="Enter Reactions"
                        name='reactions'
                    />
                </div>

                <div className="mb-3">

                    <input
                        type="text"
                        className="form-control"
                        id="tags"
                        placeholder="Enter tags (comma-separated)"
                        name='tags'
                    />
                </div>

                <button type="submit" className="btn btn-primary">Post</button>
            </Form>

        </div>

    )
}

export default CreatePost

export async function createPostAction(data){
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData)
    // console.log(postData)

    const getNextId = () => {
        idCounter += 1
        return idCounter
    }
    const getNextUserId = () => {
        userIdCounter += 101
        return userIdCounter
    }
    const calculatePostDuration = (postDate) => {
        const now = new Date()
        const postedDate = new Date(postDate)
        const timeDiff = now - postedDate

        const seconds = Math.floor(timeDiff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days}d`;
        if (hours > 0) return `${hours}h`;
        if (minutes > 0) return `${minutes}m`;
        return "1h";

    }

    let idCounter = 2
    let userIdCounter = 2

    const postDate = new Date();
    const id = getNextId();
    const userId = getNextUserId();
    const tags = postData.tags.split(' ').map(tag => tag.trim());

    const newPost = {
        id,
        userId,
        title:postData.title,
        summary:postData.summary,
        reactions:postData.reactions,
        tags,
        postDate: postDate.toISOString(), // Store the current date in ISO format
        postDuration: calculatePostDuration(postDate)

    }

    console.log(newPost);
    return redirect("/")
}