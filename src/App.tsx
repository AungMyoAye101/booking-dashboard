import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import PageLayout from "./layout";
import { routes } from "./hooks/use-route";
import type { ReactNode } from "react";
import { useAuthStore } from "./store/auth-store";
import { LoginPage } from "./common/constant";

type props = {
  children: ReactNode
}
const ProtectedRoute = ({ children }: props) => {
  const { status } = useAuthStore(s => s);
  if (status !== "loading" && status !== "authenticated") {
    return <Navigate to={'/login'} replace />
  }

  return children;
}


const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

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