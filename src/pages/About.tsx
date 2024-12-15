import Whoweare from "../components/About/Whoweare";
import NavBar from "../components/Header/NavBar";
const About = () => {
    return ( 
        <>
            <NavBar />
            <div className="bg-[#F7F7F7]">
                <Whoweare />
            </div>
        </>
     );
}
 
export default About;