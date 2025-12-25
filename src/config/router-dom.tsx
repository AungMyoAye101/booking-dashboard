import NotFound from "@/components/not-found";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Signup from "@/pages/sigup";
import {
  createBrowserRouter,
} from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export const router = createBrowserRouter(routes)