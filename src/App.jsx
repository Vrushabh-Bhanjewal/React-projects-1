import Accordion from './Accordion/Accordion'
import Home from './Pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Site from './Responsive Navbar/site'
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
    }
  ])
  return <RouterProvider router={route}></RouterProvider>
}

export default App
