import React from "react";
import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    //FaLeetcode,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="Mourya Technical"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Internships
                    </li>
                    <li
                        className="footer-menu-item"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com/@Allmixlearn369"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/AnkitMourya12"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedinIn />}
                        link="https://www.linkedin.com/in/ankit-mourya-821aa223b/"
                    />
                    {/* <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://www.youtube.com/@Allmixlearn369"
                    /> */}
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/ankitmaurya897/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2024 Mourya Technical | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
