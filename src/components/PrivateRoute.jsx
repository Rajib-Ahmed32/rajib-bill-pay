import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Loader from "../components/Loader";

const PrivateRoute = () => {
  const { user, authLoading } = useContext(AuthContext);
  const location = useLocation();

  if (authLoading)
    return (
      <div>
        <Loader />
      </div>
    );

  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
          showToast: true,
        }}
      />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
