"use client";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer-container">
            <footer className="footer">
            <p>Hope you enjoyed exploring my portfolio!</p>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    go to top
                </button>
                <p>© {currentYear} Hijiri Ishikawa. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
