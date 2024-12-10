import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import LoginForm from "../components/Login"

const routes = createBrowserRouter([
    {
      path:"/",
      element:<Layout></Layout>,
      children:[
        {
            path:"/",
            element:<div>Homepage</div>
        },
        {
            path:"/about",
            element:<div>About Page</div>
          },
          {
            path:"/contact",
            element:<div>Contact Page</div>
          },
          {
            path:"/services",
            element:<div>Service Page</div>
          },
      ]
    },
    {
        path:'/login',
        element:<LoginForm></LoginForm>
    }
    
  
  ])

  export default routes