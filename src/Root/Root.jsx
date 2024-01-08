import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  const navigation = useNavigation();
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        {navigation.state === "loading" ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          <Outlet></Outlet>
        )}
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Root;
