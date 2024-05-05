import React, { useState } from "react";

import Section from "../shared/section";
import Filters from "./filters";
import Showcase from "./showcase";
import ProjectDetails from "./projectDetails";
import "./style.scss";

const projectsData = [
    {
        id: 1,
        name: "Maharana Pratap Engineering College",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/mpec-15.jpeg"),
        },
    },
    {
        id: 2,
        name: "Pinnacle Public School",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/12thh-15.webp"),
        },
    },
    {
        id: 3,
        name: "Navodaya Academy Sec. School",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/10th-16.jpeg"),
        },
    },
    {
        id: 4,
        name: "Informatica Pool campus derive Student Volunteer",
        tags: ["volent"],
        media: {
            thumbnail: require("../../images/portfolio/info-17.jpeg"),
        },
    },
    // {
    //     id: 5,
    //     name: "Limitless",
    //     tags: [""],
    //     media: {
    //         thumbnail: require("../../images/portfolio/thumb-6.jpg"),
    //     },
    // },
    // project for web development
    {
        id: 6,
        name: "Grocery store product management website",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/grocery-1.png"),
            
        },
    },
    {
        id: 9,
        name: "Currency Converter",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/currency-3.png"),
            
        },
    },

    {
        id: 10,
        name: "Quize Website",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/quiiz-2.png"),
            
        },
    },
    {
        id: 11,
        name: "Stack Overflow Clone",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/stackO-4.png"),
            
        },
    },

    {
        id: 12,
        name: "Voting System",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/voting-5.jpg"),
            
        },
    },

    {
        id: 13,
        name: "My Portfolio Website",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/portfolio-6.jpg"),
            
        },
    },
    {
        id: 14,
        name: "Movie Dashboard",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/movie-7.jpg"),
            
        },
    },

    {
        id: 15,
        name: "React-Calculator",
        tags: ["product"],
        media: {
            thumbnail: require("../../images/portfolio/calculator-8.jpg"),
            
        },
    },
    {
        id: 16,
        name: "Students Marks Prediction(ML)",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/student-9.jpg"),
            
        },

    },
    


    {
        id: 7,
        name: "Diwali Sales Analysis",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/diwali-10.png"),
        },
    },
    {
        id: 8,
        name: "HR Analytical Dashboar(Power BI)",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/HR-12.jpg"),
        },
    },
    {
        id: 17,
        name: "Facebook Data Visualization",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/facebook-13.png"),
        },
    },

    // certification
    {
        id: 18,
        name: "Data Structure & Algorithm",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-10.jpg"),
            
        },

    },
    {
        id: 19,
        name: "Introduction to frontend Develeopment",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-11.jpg"),
            
        },

    },
    {
        id: 20,
        name: "Programming With Javascript",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-11.jpg"),
            
        },

    },
    {
        id: 21,
        name: "Programming in modern C++(IIT Kharagpur)",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-12.jpg"),
            
        },

    },

    {
        id: 22,
        name: "Web development training",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-13.jpg"),
            
        },

    },

    

    {
        id: 23,
        name: "Python And AI Bootcamp",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-14.jpg"),
            
        },

    },
    {
        id: 24,
        name: "AI for India 2.0",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-15.jpg"),
            
        },

    },
    {
        id: 25,
        name: "Tcs ion Career edge-young professional",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/students-16.jpg"),
            
        },

    },
    {
        id: 26,
        name: "SQL",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-17.jpg"),
            
        },

    },
    {
        id: 27,
        name: "Azure Fundamental (Az-900)",
        tags: ["mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/student-18.jpg"),
            
        },

    },
    
];

// const Portfolio = () => {
//     const [projects, setProjects] = useState(projectsData);
//     const [transition, setTransition] = useState(false);

//     const filterProjects = (tag) => {
//         setTransition("zoomout");

//         setTimeout(() => {
//             if (tag !== "all") {
//                 const filteredProjects = projectsData.filter((f) =>
//                     f.tags.includes(tag)
//                 );
//                 setProjects(filteredProjects);
//             } else {
//                 setProjects(projectsData);
//             }
//             setTransition("zoomin");
//         }, 200);

//         setTimeout(() => {
//             setTransition(false);
//         }, 600);
//     };

//     return (
//         <Section
//             id="portfolio"
//             title="Check My Portfolio"
//             background="light"
//         >
//             <div className="portfolio-content-wrapper">
//                 <Filters filterProjects={(tag) => filterProjects(tag)} />
//                 <Showcase
//                     data={projects}
//                     transition={transition}
//                 />
//             </div>
//         </Section>
//     );
// };

// export default Portfolio;


const Portfolio = () => {
    const [projects, setProjects] = useState(projectsData);
    const [selectedProject, setSelectedProject] = useState(null); // State to track selected project
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    // Function to handle click on a project
    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId);
    };

    // Function to close project details
    const closeProjectDetails = () => {
        setSelectedProject(null);
    };

    return (
        <Section
            id="portfolio"
            title="Check My Portfolio"
            background="light"
        >
            <div className="portfolio-content-wrapper">
                <Filters filterProjects={(tag) => filterProjects(tag)} />
                {selectedProject ? (
                    <ProjectDetails
                        project={projects.find(p => p.id === selectedProject)}
                        onClose={closeProjectDetails}
                    />
                ) : (
                    <Showcase
                        data={projects}
                        transition={transition}
                        onProjectClick={handleProjectClick} // Pass the click handler to Showcase
                    />
                )}
            </div>
        </Section>
    );
};

export default Portfolio;