import AboutMeComponents from "./AboutMe";
import ContactComponent from "./Contact";
import HeaderComponent from "./Header";
import LinksComponent from "./Link";
import SkillsComponents from "./Skills";
import FooterComponent from "./Footer"
import "./style.css";

export interface navInfoInterface {
    name: string,
    href: string,
}

const navInfos: navInfoInterface[] = [
    {
        name: "About Me",
        href: "#about"
    },
    {
        name: "Skills",
        href: "#skills"
    },
    {
        name: "Links",
        href: "#links"
    },
    /*{
        name: "Contact",
        href: "#contact"
    },*/
]

const page = () => {
    return (
        <div>
            <HeaderComponent navInfos={navInfos} />

            <section id="about">
                <AboutMeComponents />
            </section>

            <section id="skills">
                <SkillsComponents />
            </section>

            <section id="links">
                <LinksComponent />
            </section>

            {/*
            <section id="contact">
                <ContactComponent />
            </section>*/}

            <FooterComponent />

        </div>
    )
};

export default page;