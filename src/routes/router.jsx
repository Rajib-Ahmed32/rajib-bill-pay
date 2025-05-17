import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Bills from "../pages/Bills";
import BillDetails from "../pages/BillDetails";
import MyProfile from "../pages/MyProfile";
import UpdateProfile from "../pages/UpdateProfile";
import NotFound from "../pages/NotFound";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      {
        element: <PrivateRoute />,
        children: [
          { path: "bills", element: <Bills /> },
          { path: "bills/:id", element: <BillDetails /> },
          { path: "profile", element: <MyProfile /> },
          { path: "profile/update", element: <UpdateProfile /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
