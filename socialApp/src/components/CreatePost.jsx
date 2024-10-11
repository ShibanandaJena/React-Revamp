import React,{useContext, useRef} from 'react'
import { PostList } from '../store/postListStore'

function CreatePost() {
    const {addPost} = useContext(PostList)

    const titleRef = useRef();
    const summaryRef = useRef();
    const reactionsRef = useRef();
    const tagRef = useRef();

    const getNextId=()=>{
        idCounter+=1
        return idCounter
    }

    const getNextUserId=()=>{
        userIdCounter+=101
        return userIdCounter
    }

    const calculatePostDuration = (postDate)=>{
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

    // Function to get all the input parameter
    const formSubmit = (e)=>{
        e.preventDefault();

        const title= titleRef.current.value;
        const summary= summaryRef.current.value;
        const reactions= reactionsRef.current.value
        const tagInput= tagRef.current.value

        const tagString = tagInput;
        const tags = tagString.split(',').map(tag => tag.trim());
        const postDate = new Date();
        const id = getNextId();
        const userId = getNextUserId();

        const newPost = {
            id,
            userId,
            title,
            summary,
            reactions,
            tags,
            postDate: postDate.toISOString(), // Store the current date in ISO format
            postDuration: calculatePostDuration(postDate) 
    
        }

        // console.log(newPost)

        addPost(newPost);

        titleRef.current.value=""
        summaryRef.current.value=""
        reactionsRef.current.value=""
        tagRef.current.value=""
        
    }
    return (
        <div className="form-container" style={{ padding: "5px", margin: "5px" }}>
                <form className="p-4 border rounded bg-light" onSubmit={formSubmit}>
                    <div className="mb-3">
                        
                        <input 
                            type="text" 
                            className="form-control" 
                            id="title" 
                            placeholder="Enter Title"
                            ref={titleRef}
                            />
                    </div>

                    <div className="mb-3">
                        
                        <textarea 
                            name="summary" 
                            className="form-control" 
                            id="summary" 
                            rows="3" 
                            placeholder="Enter Summary"
                            ref={summaryRef}
                            ></textarea>
                    </div>

                    <div className="mb-3">
                        
                        <input 
                            type="number" 
                            className="form-control" 
                            id="reactions" 
                            placeholder="Enter Reactions" 
                            ref={reactionsRef}
                            />
                    </div>

                    <div className="mb-3">
                        
                        <input
                            type="text"
                            className="form-control"
                            id="tags"
                            placeholder="Enter tags (comma-separated)"
                            ref={tagRef}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Post</button>
                </form>

        </div>

    )
}

export default CreatePost