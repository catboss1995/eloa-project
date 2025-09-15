import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

import "../scss/styleScrollToTop.scss";



const ScrollToTop = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setShowScrollTop(scrollTop > 300); // 超過 300px 顯示按鈕
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showScrollTop && (
                <button
                    className="scroll-to-top visible"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                >
                    <FaChevronUp />
                </button>
            )}
        </>
    );
}

export default ScrollToTop