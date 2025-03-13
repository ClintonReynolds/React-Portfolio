import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app.jsx'
import{ createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './componets/About/index.jsx'
import Resume from './componets/Resume/index.jsx'
import Work from './componets/Work/index.jsx'
import Contact from './componets/Contact/index.jsx'

document.title = 'My Portfolio';

const router = createBrowserRouter(
[
  {
    path: '/',
    element: <App/>,
    errorElement: <div>Not Found</div>,
    children: [
      {
       index: true,
       element: <About/>
      },
      {
       path: '/resume',
        element: <Resume/>
      },
      {
        path: '/work',
        element: <Work/>  
      },
      {
        path: '/contact',
        element: <Contact/>
      },
    ]
  }
]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
