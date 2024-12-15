import { useState, useEffect } from "react";

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;

        // Check if the scroll position is past the hero section height
        const hasScrolledPastHero = scrollPosition > heroHeight;

        setIsFixed(hasScrolledPastHero);
        console.log(hasScrolledPastHero ? 'Scrolled past the hero section' : 'Still within the hero section');
      }
    };

    // Handle screen resizing to check if screen width is greater than 800px
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setIsOpen(false); // Close the menu if screen width is greater than 800px
      }
    };

    // Add event listeners for scroll and resize
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
    isFixed,
  };
};

export default useNavbar;
