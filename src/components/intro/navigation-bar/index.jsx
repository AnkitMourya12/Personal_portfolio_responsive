import React, { useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

import logo from "../../../images/logo.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const Navigation = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const menuItemClickHandler = (section) => {
        setMobileMenu(!mobileMenu);
        scrollToSection(section);
    };

    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="Mourya-technical"
                />
            </div>
            <div
                className="mobile-menu"
                onClick={() => setMobileMenu(!mobileMenu)}
            >
                {mobileMenu ? (
                    <IoMdClose
                        size={24}
                        color="#fff"
                    />
                ) : (
                    <CgMenuRight
                        size={24}
                        color="#fff"
                    />
                )}
            </div>
            <div className={`navigation ${mobileMenu ? "active" : ""}`}>
                <span  className="navigation-item">
                <a href="https://leetcode.com/ankitmaurya897/">LeetCode</a>
                    </span>

                    <span  className="navigation-item">
                <a href="https://auth.geeksforgeeks.org/user/ankitmou1vfk">GFG</a>
                    </span>

                    <span  className="navigation-item">
                <a href="https://www.hackerrank.com/profile/btech2021_ankit1">Hackerrank</a>
                    </span>

                    <span  className="navigation-item">
                <a href="https://www.codechef.com/users/ankit_mourya82">Codechef</a>
                    </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => menuItemClickHandler("blogs")}
                >
                   Internships
                </span>
                <CallToAction
                    text="Contact me"
                    id="navContactMe"
                    action={() => {
                        menuItemClickHandler("contact");
                    }}
                />
            </div>
        </div>
    );
};

export default Navigation;
