import React from "react";
import { useSelector } from "react-redux";
import Footer from "./components/Utility/Footer";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <UserAuthContextProvider>
      <AppRoutes user={user} />
      <Footer />
    </UserAuthContextProvider>
  );
}

export default App;
