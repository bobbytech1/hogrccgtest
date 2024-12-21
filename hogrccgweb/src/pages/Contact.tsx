import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
import ContactHero from "../components/Contact/ContactHero";
import ContactTouch from "../components/Contact/ContactTouch";
import ContactLocation from "../components/Contact/ContactLocation";
import useNavbar from "../hooks/useNavbar";

const Contact = () => {
    const {isFixed} = useNavbar()
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