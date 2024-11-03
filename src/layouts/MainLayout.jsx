import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <div className="h-16 mb-8">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-232px)] md:w-[86%] lg:w-[75%] mx-auto mb-10">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;