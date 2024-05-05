import React from "react";

import Section from "../shared/section";
import BlogCard from "./blog-card";
import Blog0 from "../../images/blogs/blog-thumb-0.jpg";
import Blog1 from "../../images/blogs/blog-thumbs-1.jpg";
import Blog2 from "../../images/blogs/blog-thumbs-2.jpg";
import Blog3 from "../../images/blogs/blog-thumbs-3.jpg";

import "./style.scss";

const Blogs = () => {
    return (
        <Section
            id="blogs"
            title="Internships"
            background="dark"
        >
            <div className="blogs-content-wrapper">
            <BlogCard
                    user="Swiggy"
                    date="Mar 2024 - present"
                    image={Blog0}
                    title="Swiggy (Bundle Technologies Pvt Ltd) Internship"
                    description="Skills:MS - Excel· Communication · Leadership · Networking."
                />
                <BlogCard
                    user="Excelerate"
                    date="Aug 2023 - Sep 2023"
                    image={Blog1}
                    title="Data Analyst intern"
                    description="Skills:Data Analysis,Data Visualization,Data cleaning and Processing"
                />
                <BlogCard
                    user="NullClass"
                    date="May 2023 - Jul 2023"
                    image={Blog2}
                    title="Full stack Intern"
                    description="Skills: Ui/dx · JavaScript · React.js · MongoDB · Git and GitHub · Node.js · CSS · HTML."
                />
                <BlogCard
                    user="IIT DELHI"
                    date="Feb 2023 - Mar 2023"
                    image={Blog3}
                    title="Campus Ambassador"
                    description="Skills: Management · Communication · Leadership · Networking."
                />


            </div>
        </Section>
    );
};

export default Blogs;
