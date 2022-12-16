import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Utility/Footer";
import Navbar from "./components/Utility/Navbar";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { AppRoutes } from "./routes/AppRoutes";
import axios from "axios";

function App() {
  const user = useSelector((state) => state.userReducer.user);
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_LMS_API}/get-user-info/${user.uid}`
      );

      setUserInfo(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <UserAuthContextProvider>
      <Navbar user={user} userInfo={userInfo} />
      <div style={{ minHeight: "89vh" }}>
        <AppRoutes user={user} userInfo={userInfo} />
      </div>
      <div>
        <Footer />
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
