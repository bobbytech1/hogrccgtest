import { usePageContentContact } from '../hooks/usePageContentContact';
import Loader from "../components/Loader";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactTouch from "../components/Contact/ContactTouch";
import ContactLocation from "../components/Contact/ContactLocation";
import useNavbar from "../hooks/useNavbar";

const Contact = () => {
    const {isFixed} = useNavbar()
    const { isLoading, isError } = usePageContentContact('contact-page');
    if (isLoading) return <div><Loader /></div>;
    if (isError) return <div className="flex justify-center items-center md:text-[30px] text-[20px] font-bold text-center h-screen font-headingFont">Network Error Could not Load Resources</div>;
    return ( 
        <>
        <NavBar  headerStyle={`w-full z-20 ${isFixed ? 'fixed top-0 left-0 bg-[#000000] animate-slideDown' : 'absolute top-0 left-0 bg-transparent'}`} />
            <div className="bg-[#F7F7F7]">
                <ContactHero />
                <ContactTouch />
                <ContactLocation />
            </div>
            <Footer />
        </>
     );
}
 
export default Contact;