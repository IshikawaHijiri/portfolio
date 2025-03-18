"use client";
import { Menu, X } from "lucide-react"; // ハンバーガーメニュー用
import Image from "next/image";
import { useState } from "react";
import logo from "./icons/github.png"; // 適宜変更
import { navInfoInterface } from "./page";

const HeaderComponent = ({ navInfos }: { navInfos: navInfoInterface[] }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            {/* 左端のロゴ */}
            <div className="logo">
                <Image src={logo} alt="Logo" width={50} height={50} />
            </div>

            {/* メニュー */}
            <nav className={`nav ${menuOpen ? "open" : ""}`}>
                {
                    navInfos && (
                        navInfos.map((navinfo, index) => {
                            return (
                                <a href={navinfo.href} onClick={() => setMenuOpen(false)} key={index}>{navinfo.name}</a>
                            )
                        })
                    )
                }
            </nav>

            {/* ハンバーガーメニュー（スマホ用） */}
            <button className="menu-btn" onClick={toggleMenu}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </header>
    );
};

export default HeaderComponent;
