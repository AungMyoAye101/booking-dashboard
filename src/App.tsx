import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import PageLayout from "./layout";
import { routes } from "./hooks/use-route";
import type { ReactNode } from "react";
import { useAuthStore } from "./store/auth-store";

type props = {
  children: ReactNode
}
const ProtectedRoute = ({ children }: props) => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to={'/login'} replace />
  }

  return children;
}


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={
        <ProtectedRoute>
          <PageLayout />
        </ProtectedRoute>} >
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