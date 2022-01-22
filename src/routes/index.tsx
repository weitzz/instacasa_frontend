import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Users from "../pages/Users";
import DetailsUser from "../pages/DetailsUser";

const MainRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<DetailsUser />} />
      </Routes>
      <Footer />
    </>
  );
};

export default MainRoutes;
