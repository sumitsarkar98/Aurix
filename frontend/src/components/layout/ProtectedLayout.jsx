import { Navigate, Outlet } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = () => {
  //   const { user } = useAuth();
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
