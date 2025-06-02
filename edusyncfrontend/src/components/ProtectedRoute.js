import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children}) => {

  const isAuthenticate = localStorage.getItem('token') ? true : false

  return isAuthenticate ? children : <Navigate to="/" replace />;

};

export default ProtectedRoute;
