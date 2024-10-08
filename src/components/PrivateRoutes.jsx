import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

function PrivateRoutes({ user }) {
  if (!user.username) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

PrivateRoutes.propTypes = {
  user: PropTypes.object.isRequired,
};

export default PrivateRoutes;
