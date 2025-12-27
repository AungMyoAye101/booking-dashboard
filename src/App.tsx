import {
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import PageLayout from "./layout";
import { routes } from "./hooks/use-route";





const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PageLayout />} >
        {
          routes.map(({ path, element }, i) => (
            <Route path={path} element={element} key={i} />
          ))
        }
      </Route>
    </Routes>


  )
}

export default App