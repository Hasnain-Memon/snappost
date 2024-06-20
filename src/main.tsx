import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import {store}  from './store/store.ts'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
// import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import PostsPage from './pages/PostsPage.tsx'
import AddPostPage from './pages/AddPostPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/posts',
    element: <PostsPage />
  },
  {
    path: '/add-post',
    element: <AddPostPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
