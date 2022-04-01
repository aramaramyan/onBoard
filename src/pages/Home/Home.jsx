import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import getUsersData from "../../services/getUserData";
import getStorage from "../../helpers/getStorage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setUserID} from "../../features/signUpSlice";

export default function Home() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userID = getStorage();

  useEffect(() => {
    getUsersData(userID).catch(err => alert(err)).then(res => {
      dispatch(setUserID(res));
    });
  }, []);

  console.log(user);

  return (
    <div className="home_page_wrapper">
      <Navbar />
      <h1>Home Page</h1>
    </div>
  );
}