import React from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Utility/Footer";
import Navbar from "./components/Utility/Navbar";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <UserAuthContextProvider>
      <Navbar user={user} />
      <div style={{ minHeight: "89vh" }}>
        <AppRoutes user={user} />
      </div>
      <div>
        <Footer />
      </div>
    </UserAuthContextProvider>
  );
}

export default App;
