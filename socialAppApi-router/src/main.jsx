import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'

// import { PostList } from './store/postListStore.jsx'


const route = createBrowserRouter([
  { 
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<PostList />,
      },
      {
        path:"/create-post",
        element:<CreatePost />,
        action:createPostAction
      }
    ]},
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
    
  </StrictMode>,
)
