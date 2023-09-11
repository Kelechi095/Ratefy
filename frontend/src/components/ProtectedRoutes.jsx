import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Ring, Waveform, DotSpinner, DotPulse } from "@uiball/loaders";

const ProtectedRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  if (auth.getUserDetailsStatus === "pending") {
    return (
      <div className="loader">
        <DotSpinner size={65} color="#231F20" />
      </div>
    );
  }

  if (!auth.id) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
