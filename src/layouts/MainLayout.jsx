import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="md:w-[90%] mx-auto my-3">
            <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-232px)] md:w-[85%] lg:w-[75%] mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;