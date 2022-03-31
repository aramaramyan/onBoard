import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import getUsersData from "../../services/getUserData";
import getStorage from "../../helpers/getStorage";
import {useEffect} from "react";

export default function Home() {
  const userID = getStorage();

  useEffect(() => {
    getUsersData(userID).catch(err => alert(err)).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div className="home_page_wrapper">
      <Navbar />
      <h1>Home Page</h1>
    </div>
  );
}