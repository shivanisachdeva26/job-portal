import React from 'react';
import "./App.css";
import AppLayout from './layout/app-layout';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import SavedJobs from './pages/saved-job';
import PostJob from './pages/post-job';
import Onboarding from './pages/onboarding';
import ProtectedRoute from './components/protected-routes';
import LandingPage from './pages/landing';
import MyJobs from './pages/my-jobs';
import { ThemeProvider } from './components/theme-provider';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path:"/onboarding",
        element:<ProtectedRoute><Onboarding/></ProtectedRoute>
      },
      {
        path:"/jobs",
        element:
        <ProtectedRoute><JobListing/></ProtectedRoute>
      },
      {
        path:"/job/:id",
        element:<ProtectedRoute><JobPage/></ProtectedRoute>
      },
      {
        path:"/post-job",
        element:(<ProtectedRoute><PostJob/></ProtectedRoute>),
      },
      {
        path:"/saved-jobs",
        element:<ProtectedRoute><SavedJobs/></ProtectedRoute>
      },
      {
        path:"/my-jobs",
        element:<ProtectedRoute><MyJobs/></ProtectedRoute>
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export default App