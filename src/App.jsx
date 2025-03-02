import Accordion from './Accordion/Accordion'
import Home from './Pages/Home'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
function App() {
 
  const route=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/Accordion',
      element:<Accordion/>
    }
  ])
  return <RouterProvider router={route}></RouterProvider>
}

export default App
