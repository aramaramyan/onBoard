import { Outlet } from "react-router"
import getStorage from "../../helpers/getStorage";
import Registration from "../../pages/Registration/Registration";

export default function PrivateRoute() {
  const isAuth = !!getStorage();

  return isAuth? <Outlet /> : <Registration />

}