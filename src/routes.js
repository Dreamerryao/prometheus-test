import { Navigate } from "react-router";
import ThrowError from "./Pages/ThrowError";
import HttpRequest from "./Pages/HttpRequest"
import Home from "./Pages/Home"

export default [
  {
    path: '/prometheus-test/error',
    element: <ThrowError />
  },
  {
    path: '/prometheus-test/http-request',
    element: <HttpRequest />
  },
  {
    path: '/prometheus-test/home',
    element: <Home />
  },
  {
    path:'/prometheus-test/',
    element:<Navigate to="/prometheus-test/home"/>
  }
];