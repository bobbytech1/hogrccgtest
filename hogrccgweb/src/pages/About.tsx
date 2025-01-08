import { usePageContentAbout } from '../hooks/usePageContentAbout';
import Whoweare from "../components/About/Whoweare";
import Loader from "../components/Loader";
import MissionandVision from "../components/About/Mission&Vision";
import PIC from "../components/About/PIC";
import Vision2032 from "../components/About/Vision2032";
import AboutCardList from "../components/About/AboutCards";
import WeeklyActivities from "../components/About/WeeklyActivities";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
const About = () => {
       const { isLoading, isError } = usePageContentAbout('about-page');
        if (isLoading) return <div><Loader /></div>;
        if (isError) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">Network Error Could not Load Resources</div>;
    return ( 
        <>
            <NavBar />
            <div className="bg-[#F7F7F7]">
                <Whoweare />
                <PIC />
                <MissionandVision />
                <Vision2032/>
                <AboutCardList />
                <WeeklyActivities />
            </div>
            <Footer/>
        </>
     );
}
 
export default About;