import Whoweare from "../components/About/Whoweare";
import MissionandVision from "../components/About/Mission&Vision";
import PIC from "../components/About/PIC";
import Vision2032 from "../components/About/Vision2032";
import AboutCardList from "../components/About/AboutCards";
import WeeklyActivities from "../components/About/WeeklyActivities";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
const About = () => {
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