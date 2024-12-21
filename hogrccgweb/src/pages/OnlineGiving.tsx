import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import ComingSoon from "../components/OnlineGiving/ComingSoon"
import { images } from "../constants";

const OnlineGiving = () => {
    const backgroundImageUrl = `${images.ComingSoonImg}`;
    return ( 
        <>
            <NavBar />
            <div className="bg-[#F7F7F7]">
                <ComingSoon  backgroundImageUrl={backgroundImageUrl}/>
            </div>
            <Footer/>
        </>
     );
}
 
export default OnlineGiving;