import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./Scroll";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Events from "../pages/Events";
import Sermons from "../pages/Sermons";
import OnlineGiving from "../pages/OnlineGiving";
import Ministries from "../pages/Ministries";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import AdminLogin from "../pages/admin/Login"
import AdminDashboard from "../pages/admin/Dashboard";

const FolderRoute = () => {
    return ( 
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/events" element={<Events />} />
                <Route path="/sermons" element={<Sermons />} />
                <Route path="/onlinegiving" element={<OnlineGiving />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/ministries" element={<Ministries />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admindash" element={<AdminDashboard />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </>
     );
}
 
export default FolderRoute;