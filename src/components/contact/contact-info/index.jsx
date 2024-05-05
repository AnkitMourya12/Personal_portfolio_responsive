import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have about
                Web Development  or Data Visualization and CSE theory Subject !
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 6367272003</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">ankit.mourya8233@gmail.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;
