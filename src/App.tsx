import {
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import PageLayout from "./layout";
import Home from "./pages/home";





const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PageLayout />} >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>


  )
}

export default App