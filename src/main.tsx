import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import {store}  from './store/store.ts'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
// importing pages
import AboutPage from './pages/AboutPage.tsx'
import AddPostPage from './pages/AddPostPage.tsx'
import LoginPage from './pages/LoginPage.tsx'
import SignupPage from './pages/SignupPage.tsx'
import AllPostPage from './pages/AllPostPage.tsx'
import HomePage from './pages/HomePage.tsx'
import PostPage from './pages/PostPage.tsx'

// import components
import AuthLayout from './components/AuthLayout.tsx'
import { EditPostPage } from './pages/EditPostPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/posts',
        element: (
          <AuthLayout authentication>
            {/* {""} */}
            <AllPostPage />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {/* {''} */}
            <AddPostPage />
          </AuthLayout>
        )
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignupPage />
          </AuthLayout>
        )
      },
      {
        path: "/post/:slug",
        element: <PostPage />
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {/* {""} */}
            <EditPostPage />
          </AuthLayout>
        )
      }
    ]
  },
  
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
