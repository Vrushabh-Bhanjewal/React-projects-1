import Accordion from './Accordion/Accordion'
import Home from './Pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Site from './Responsive Navbar/site'
import Contact from './Dynamic Contact/contact'
function App() {
 
  const route=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Accordion',
      element:<Accordion/>
    },
    {
      path:'/Site',
      element:<Site />
    },
    {
      path:'/Contact',
      element:<Contact />
    }
  ])
  return <RouterProvider router={route}></RouterProvider>
}

export default App
