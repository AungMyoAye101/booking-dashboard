import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./config/router-dom";




const App = () => {
  return (


    <RouterProvider router={router} />


  )
}

export default App