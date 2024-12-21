import NavBar from "../components/Header/NavBar";
import Sermon from "../components/Sermons/Sermon"
import LatestSermon from "../components/Sermons/LatestSermon"
import SermonList from "../components/Sermons/SermonList"
import Footer from "../components/Footer/Footer";

const Sermons = () => {
    return ( 
        <>
        <NavBar />
            <div className="bg-[#F7F7F7]">
                <Sermon />
                <LatestSermon />
                <SermonList />
            </div>
            <Footer/>
        </>
     );
}
 
export default Sermons;