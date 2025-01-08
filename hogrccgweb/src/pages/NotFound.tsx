import {Link} from "react-router-dom"
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";

const NotFound = () => {
    return ( 
        <>
         <NavBar/>
           <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 text-center">
      <h1 className="text-8xl font-bold text-hogblack mb-4 font-headingFont">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 font-paragraphFont">Page Not Found</h2>
      <p className="text-gray-600 mb-6 font-paragraphFont">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-hogblue text-white font-medium font-linkFont rounded-md shadow hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
        <Footer />
        </>
     );
}
 
export default NotFound;