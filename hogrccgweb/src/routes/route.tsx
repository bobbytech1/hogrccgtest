import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./privateRoutes";
import PublicRoutes from "./publicRoutes";
import ScrollToTop from "./Scroll";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Events from "../pages/Events";
import EventDetails from "../components/Events/EventDetails"; // Detail component for Events
import Sermons from "../pages/Sermons";
import OnlineGiving from "../pages/OnlineGiving";
import Ministries from "../pages/Ministries";
import MinistryDetails from "../components/Ministries/MinistriesDetails"; // Detail component for Ministries
import Blog from "../pages/Blog";
import BlogDetails from "../components/Blog/BlogDetails"; // Detail component for Blogs
import Contact from "../pages/Contact";
import AdminLogin from "../pages/admin/Login";
import AdminDashboard from "../pages/admin/Dashboard";

const FolderRoute = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/onlinegiving" element={<OnlineGiving />} />
          <Route path="/ministries" element={<Ministries />} />
          <Route path="/ministries/:id" element={<MinistryDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<AdminLogin />} />
        </Route>

        <Route element={<PrivateRoutes />}>
          <Route path="/admindash" element={<AdminDashboard />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default FolderRoute;
