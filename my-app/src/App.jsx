
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing, Login, Logout, Register, } from "./pages";
import { ToastContainer } from 'react-toastify';
import ForgetPassword from "./pages/ForgetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      { path: "forget-password", element: <ForgetPassword /> },
    ],
  },
]);

function App() {


  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer position='top-center' />
    </>
  )
}

export default App
