import { useEffect } from "react";
import { useLocation } from "react-router";


export default function ScrollPage() {
    const location = useLocation();

    useEffect(() => {
      const savedPosition = sessionStorage.getItem(`scrollPosition-${location.pathname}`);
      if (savedPosition !== null) {
        window.scrollTo(0, parseInt(savedPosition, 10));
      }
    }, [location.pathname]);
  
    useEffect(() => {
      const handleScroll = () => {
        sessionStorage.setItem(`scrollPosition-${location.pathname}`, window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return null;
}