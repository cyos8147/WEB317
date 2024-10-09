import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'

// Pages
import App from './App.jsx'
import StudentList from './Pages/StudentList.jsx';
import StudentProfilePage from './Pages/StudentProfile.jsx';


const router = createBrowserRouter([

  {
    path:'/',
    element:<App/>
  },

  {
    path:'StudentList',
    element:<StudentList/>
  },

  {
    path:'StudentProfile',
    element:<StudentProfilePage/>
  },




])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
