import { useState } from 'react'
import { Header, Footer, Sidebar, CreatePost, PostList } from './components/index'
import './app.css'
import  PostListProvider from './store/postListStore'
import { Outlet } from 'react-router-dom'


function App() {

  // const [selectedTab, setSelectedTab] = useState("Dashboard")

  // const dashboardHandler = () => {
  //   setSelectedTab("Dashboard")
  // } 

  // const createPostHandler = () => {
  //   setSelectedTab("Create Post")
  // }

  return (
    <div className='app-container'>
      <PostListProvider>
        <Sidebar 
          // selectedTab={selectedTab}
          // dashboardHandler={dashboardHandler}
          // createPostHandler={createPostHandler}

        />
        <div className="content">
          <Header />

          <Outlet></Outlet>

          <Footer />
        </div>
      </PostListProvider>
    </div>
  )
}

export default App
