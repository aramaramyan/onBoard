import {Navigate} from "react-router"
import getStorage from "../../helpers/getStorage";

export default function PrivateRoute({ children }) {
  const isAuth = !!getStorage();

  return isAuth? children : <Navigate replace to="/login" />;
}