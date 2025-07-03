import './App.css'
import Login from './Login'

import { RouterProvider } from "react-router-dom"
import { router } from './router'
import { ContextProvider } from './context/authContext'


function App() {


  return (
    <>
      <ContextProvider>
        <RouterProvider router={router}>
          <div>
            <Login />
          </div>
        </RouterProvider>
      </ContextProvider>
    </>
  )
}

export default App
