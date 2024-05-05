import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../images/girl.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

import "./style.scss";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img src={hand} />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text">Ankit Mourya</span>
                    </h1>
                    <p className="title">
                    I've started an exciting adventure in the areas of MERN stack development,data analysis 
                    and more with a strong foundation in computer science and engineering. 
My pursuit of a Bachelor of Technology (BTech) in Computer Science and Engineering at the Maharana Pratap Group 
of Institutions led me there, and my anticipated graduation date is September 2025.
                    </p>
                    {/* <CallToAction
                        text="Contact me"
                        action={() => {
                            scrollToSection("contact");
                        }}
                    /> */}
                </div>
                <div className="right-col">
                    <img
                        src={girl}
                        alt="Hello I am Ankit Mourya"
                    />

                    {/* <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Best Design Award</div>
                    </div> */}

                    {/* <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>4k+</span>
                            Happy Customers
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
