import { useSermons } from "../hooks/useSermon";
import NavBar from "../components/Header/NavBar";
import Sermon from "../components/Sermons/Sermon"
import LatestSermon from "../components/Sermons/LatestSermon"
import SermonList from "../components/Sermons/SermonList"
import Footer from "../components/Footer/Footer";

const Sermons = () => {
     const {  isLoading, error } = useSermons();
    
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center">Network Error Could not Load Resources</div>;
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