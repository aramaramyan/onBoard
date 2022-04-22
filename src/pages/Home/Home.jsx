import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import {getUserData, setState} from "../../features/userSlice";
import getStorage from "../../helpers/getStorage";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import useFirestore from "../../hooks/useFirestore";

export default function Home() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const userID = getStorage();
  const {getUserBoards} = useFirestore();

  useEffect(() => {
    getUserData(userID).then(res => {
      dispatch(setState(res));
    });
    getUserBoards();
  }, [])


  return (
    <div className="home_page_wrapper">
      <Navbar/>
      {user.userID? (
        <>
          <h1>Home Page</h1>
          <p>{JSON.stringify(user)}</p>
        </>
      ) : <p>Loading...</p>
      }
    </div>
  );
}