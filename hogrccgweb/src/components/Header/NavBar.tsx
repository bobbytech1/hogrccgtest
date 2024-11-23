import { images } from "../../constants";
import { Link } from "react-router-dom";
import { FaAlignRight, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import useNavbar from "../../hooks/useNavbar";

interface CustomNavProps {
    headerStyle?: string;
}

const NavBar: React.FC<CustomNavProps> = ({ headerStyle }) => {
    const {isOpen, toggleMenu, closeMenu } = useNavbar()

    return (
        <>
        <div className={`${headerStyle} bg-black flex items-center justify-between w-full py-5 xsm:px-10 px-6`} id="header">
           
                <div className="">
                    <Link to="/"><img src={images.Logo} alt="Logo" className="h-[40px]" /></Link>
                </div>
                <div className="hidden xmd:flex items-center text-white space-x-6 text-[16px] font-linkFont capitalize font-normal">
                    <Link to="/about" className="hover:text-yellow-400 active:text-yellow-400 transition-all ">Who we are</Link>
                    <Link to="/events" className="hover:text-yellow-400 active:text-yellow-400 transition-all">Events</Link>
                    <Link to="/sermons" className="hover:text-yellow-400 active:text-yellow-400 transition-all">Sermons</Link>
                    <Link to="/onlinegiving" className="hover:text-yellow-400 active:text-yellow-400 transition-all">Online Giving</Link>
                    <Link to="/ministries" className="hover:text-yellow-400 active:text-yellow-400 transition-all">Ministries</Link>
                    <Link to="/contact" className="hover:text-yellow-400 active:text-yellow-400 transition-all">Contact</Link>
                </div>
                {/* Mobile menu icon */}
                <div className="xmd:hidden flex" onClick={toggleMenu}>
                    <FaAlignRight className="text-white text-[22px]" />
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="relative z-[999] w-full h-full">
  {/* Overlay */}
  <div
    className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
      isOpen ? "opacity-100 visible" : "opacity-0 invisible"
    }`}
  ></div>

  {/* Sliding Menu */}
  <div
    className={`bg-gradient-to-r from-cyan-700 via-cyan-800 to-cyan-700 xssm:overflow-y-hidden overflow-y-auto py-6  w-[65%] h-screen space-y-6 fixed top-0 right-0 transform ${
      isOpen ? "translate-x-0" : "translate-x-full"
    } transition-transform duration-1000`}
    id="mobile-menu"
  >
    {/* Close Button */}
    <div onClick={closeMenu} className="flex items-start justify-start px-4 pb-6 w-full">
    <IoMdClose className="text-white text-[24px]"/>
    </div>
    
    <div className="">
         {/* Logo */}
    <div className="flex justify-center items-center pb-2">
      <Link to="/">
        <img src={images.Logo} alt="Logo" className="h-[45px]" />
      </Link>
    </div>

    {/* Menu Links */}
    <div className="flex flex-col items-center justify-center text-white space-y-3 text-[20px] font-linkFont capitalize font-normal py-8">
      <Link to="/about" className="hover:text-yellow-400 active:text-yellow-400 transition-all">
        Who we are
      </Link>
      <Link to="/events" className="hover:text-yellow-400 active:text-yellow-400 transition-all">
        Events
      </Link>
      <Link to="/sermons" className="hover:text-yellow-400 active:text-yellow-400 transition-all">
        Sermons
      </Link>
      <Link to="/onlinegiving" className="hover:text-yellow-400 active:text-yellow-400 transition-all">
        Online Giving
      </Link>
      <Link to="/ministries" className="hover:text-yellow-400 active:text-yellow-400 transition-all">
        Ministries
      </Link>
      <Link to="/contact" className="hover:text-yellow-400 active:text-yellow-400 transition-all">
        Contact
      </Link>
    </div>

    {/* Social Icons */}
    <div className="flex justify-center items-center space-x-4 pt-10">
      <FaFacebook className="text-black text-[40px] w-19 rounded-full py-2   bg-white" />
      <FaInstagram className="text-black text-[40px] w-19 rounded-full py-2  bg-white" />
      <FaYoutube className="text-black text-[40px] w-19 rounded-full py-2  bg-white" />
    </div>
    </div>
   
  </div>
</div>


        </>
    );
}

export default NavBar;