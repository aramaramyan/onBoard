import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import {getUserData, setState} from "../../features/userSlice";
import getStorage from "../../helpers/getStorage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import {setUserID} from "../../features/signUpSlice";

export default function Home() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userID = getStorage();

  useEffect(() => {
    getUserData(userID).then(res => {
      console.log("res", res);
      dispatch(setState(res));
    });
  }, [user])

  console.log(user);


  return (
    <div className="home_page_wrapper">
      <Navbar/>
      <h1>Home Page</h1>
      <p>{JSON.stringify(user)}</p>
    </div>
  );
}