import { images } from "../../constants";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-black p-8">
        <div className="flex xssm:flex-row flex-col justify-between xssm:items-center">
          <div className="flex items-center sm:space-x-4 space-x-10">
            <Link to="/">
              <img src={images.Logo} alt="Logo" className="h-[40px]" />
            </Link>
            <div className="flex items-center space-x-3">
              <a href="">
                <FaFacebook className="text-white text-[30px]" />
              </a>
              <a href="">
                <FaInstagram className=" text-white text-[30px] " />
              </a>
              <a href="">
                <FaYoutube className="text-white text-[30px]" />
              </a>
            </div>
          </div>
          <div className="xssm:mt-0 mt-6">
            <div className="flex items-center space-x-3">
              <p className="font-paragraphFont text-white font-medium text-[18px]">
                info@rccghog.org
              </p>
              <a href="">
                <MdEmail className="text-[30px] text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex lgx:flex-row flex-col lgx:items-center justify-between">
            <div className="lgx:w-[50%] xssm:w-[90%] w-[100%]">
            <p className="text-white font-headingFont sm:text-[28px] text-[24px] font-bold py-6">
            Join us at the Redeemed Christian Church of God (H O G) as we strive to love God and serve our community.
            </p>
            <a
            href="https://maps.app.goo.gl/3s8wUfJ4FEBvtizR6"
            target="_blank"
            rel="noopener noreferrer"
            className="lgx:mt-0 lgx:mb-0 mt-4 mb-6 flex items-center border-[2px] text-white  border-hogblue hover:text-white hover:bg-hogblue hover:transition-all hover:duration-500 cursor-pointer px-4 py-3 rounded-[8px] w-fit font-linkFont"
          >
            Worship with us
          </a>
            </div>

            <div className="text-white font-linkFont flex xssm:flex-row flex-col xssm:items-center lgx:mt-0 lgx:mb-0 mb-6 space-y-4 xssm:space-x-20">
                <div className="flex flex-col xssm:text-[22px] text-[24px]">
                <Link to="/" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Home</Link>
              <Link to="/about" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">About</Link>
              <Link to="/ministries" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Ministries</Link>
              <Link to="/sermons" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Sermons</Link>
                </div>
                <div className="flex flex-col text-[20px]">
                <Link to="/onlinegiving" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Online Giving</Link>
              <Link to="/blog" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Blog</Link>
              <Link to="/events" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Events</Link>
              <Link to="/contact" className="hover:text-yellow-400 active:text-yellow-400 transition-all w-fit">Contact</Link>
                </div>
            </div>
        </div>

        <p className="text-center text-white xxm:text-xl text-[18px] font-linkFont capitalize">
          &copy; 2023 rccg Hog. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
