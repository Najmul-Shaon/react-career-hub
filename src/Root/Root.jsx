import { Outlet } from "react-router-dom";
import Statistics from "../Statistics/Statistics";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div>
      <Statistics></Statistics>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
