import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollPage() {
    const { pathname } = useLocation();

    useEffect(() => {
        const savedPosition = sessionStorage.getItem(`scrollPosition-${pathname}`);
        if (savedPosition) {
            window.scrollTo(0, Number(savedPosition));
        }
    }, [pathname]);
  
    useEffect(() => {
        const handleScroll = () => {
            sessionStorage.setItem(`scrollPosition-${pathname}`, String(window.scrollY));
        };
  
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return null;
}
