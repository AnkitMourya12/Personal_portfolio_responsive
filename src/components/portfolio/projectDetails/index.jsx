// import React from "react";

// const ProjectDetails = ({ projects, onClose }) => {
//     // Conditional rendering for specific project details
//     const renderProjectDetails = () => {
//         if (projects.name === "Grocery store product management website") {
//             return (
//                 <div>
//                     <h2>{projects.name}</h2>
//                     <p>
//                         Lorem ipsum dolor sit amet, consectetur adipiscing
//                         elit. Sed do eiusmod tempor incididunt ut labore et
//                         dolore magna aliqua. Ut enim ad minim veniam, quis
//                         nostrud exercitation ullamco laboris nisi ut aliquip ex
//                         ea commodo consequat. Duis aute irure dolor in
//                         reprehenderit in voluptate velit esse cillum dolore eu
//                         fugiat nulla pariatur. Excepteur sint occaecat
//                         cupidatat non proident, sunt in culpa qui officia
//                         deserunt mollit anim id est laborum.
//                     </p>
//                     <button onClick={onClose}>Close</button>
//                 </div>
//             );
//         } else {
//             // Render default project details
//             return (
//                 <div>
//                     <h2>{projects.name}</h2>
//                     <img src={projects.media.thumbnail} alt={projects.name} />
//                     <p>ID: {projects.id}</p>
//                     <p>Tags: {projects.tags.join(", ")}</p>
//                     <button onClick={onClose}>Close</button>
//                 </div>
//             );
//         }
//     };

//     return <div className="project-details">{renderProjectDetails()}</div>;
// };

// export default ProjectDetails;

// import React from "react";

// const ProjectDetails = ({ project, onClose }) => {
//     // Render different content based on the selected project
//     const renderProjectContent = () => {
//         switch (project.id) {
//             case 1:
//                 return (
//                     <div>
//                         <h2>{project.name}</h2>
//                         <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing
//                             elit. Sed do eiusmod tempor incididunt ut labore et
//                             dolore magna aliqua.
//                         </p>
//                     </div>
//                 );
//             case 2:
//                 return (
//                     <div>
//                         <h2>{project.name}</h2>
//                         <p>
//                             Ut enim ad minim veniam, quis nostrud exercitation
//                             ullamco laboris nisi ut aliquip ex ea commodo
//                             consequat.
//                         </p>
//                     </div>
//                 );
//             // Add cases for other projects
//             default:
//                 return (
//                     <div>
//                         <h2>{project.name}</h2>
//                         <p>
//                             No additional information available for this
//                             project.
//                         </p>
//                     </div>
//                 );
//         }
//     };

//     return (
//         <div className="project-details">
//             {renderProjectContent()}
//             <button onClick={onClose}>Close</button>
//         </div>
//     );
// };

// export default ProjectDetails;

import React, { useEffect } from "react";
import "./style.scss";

const ProjectDetails = ({ project, onClose }) => {
    // Automatically close project details if project is not valid
    useEffect(() => {
        if (!project) {
            onClose();
        }
    }, [project, onClose]);

    // Render different content based on the selected project
    const renderProjectContent = () => {
        if (!project) {
            return null;
        }

        switch (project.id) {
            case 1:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                {" "}
                                BTech, Computer science and engineering <br />
                                sep 2021 - sep 2025
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                Grade: 1st sem 8.05 sgpa & 2nd sem 8.6 sgpa, 3rd
                                sem 7.9 sgpa, 4th Sem 8.1 sgpa
                            </p>
                            <p>Current Percentage: 77.76%</p>
                            <br />
                            <p>Kanpur Nagar,Uttar Pradesh</p>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓{project.name}</h3>
                            <p className="education-date">
                                Intermediate {"(RBSE Board)"} <br />
                                Jun 2019 - Jun 2020
                            </p>
                        </div>
                        <div className="education-details">
                            <p>percetage:75.60%</p>
                            <br />
                            <p>Alwar District, Rajasthan</p>
                        </div>
                    </div>
                );

            // Add cases for other projects
            case 3:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                High School {"(RBSE Board)"} <br />
                                Apr 2019 - Mar 2020
                            </p>
                        </div>
                        <div className="education-details">
                            <p>percetage:73.33%</p>
                            <br />
                            <p>Alwar District, Rajasthan</p>
                        </div>
                    </div>
                );
            case 4:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date"> 13 - 14 Mar 2024</p>
                        </div>
                        <div className="education-details">
                            <p>
                                Informatica Two Days Pool Campus Derive At MPEC
                                College
                            </p>
                            <br />
                            <p>
                                In This Pool campus derive, I am repersenting as
                                a student Volunteer{" "}
                            </p>
                        </div>
                    </div>
                );
            // case 5:
            //     return (
            //         <div>
            //             <h2>{project.name}</h2>
            //             <p>
            //                 laboris nisi ut aliquip ex ea commodo
            //                 consequat.
            //             </p>
            //         </div>
            //     );

            case 6:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                sep 2023 - dec 2023
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                <ol>
                                    <li>
                                        {" "}
                                        In this project, we make a grocery store
                                        management application to manage product
                                        and customer detaile's.
                                        <br /> It will be 3 tier application.
                                    </li>
                                    <li>
                                        Front end: UI is written in
                                        HTML/CSS/JavaScript/Bootstrap
                                    </li>
                                    <li>Backend: Python and Flask</li>
                                    <li> Database: MySQL</li>
                                    <li>
                                        My role was to Developed frontend
                                        interface using HTML/CSS/JavaScript.
                                    </li>
                                    <li>
                                        {" "}
                                        After completion of FrontEnd then to
                                        work on database using MYQL.{" "}
                                    </li>
                                    <li>
                                        And Last step to connect
                                        frontend/backend and database to server
                                        using Python flask
                                    </li>
                                </ol>
                            </p>
                            <a href="https://github.com/AnkitMourya12/Grocery_Website?tab=readme-ov-file#grocery_website">
                                See Project
                            </a>
                        </div>
                    </div>
                );

            case 9:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                Mar 2024 - Mar 2024
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                <ol>
                                    <li>
                                        {" "}
                                        In this project, we make a currency
                                        converter Website.
                                    </li>
                                    <li>
                                        Front end: UI is written in
                                        HTML/CSS/JavaScript
                                    </li>
                                    <li>
                                        {" "}
                                        After completion of Frontend then i
                                        apply API to fetch the data to my
                                        website and to show on UI
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <a href="https://github.com/AnkitMourya12/currency_converter_miniProject1">
                                See Project on GitHub
                            </a>

                            <br />
                            <a href="https://currencyconvert1.netlify.app/">
                                See my deployed Website on Netlify
                            </a>
                        </div>
                    </div>
                );
            case 10:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                Mar 2024 - Mar 2024
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                🚀 Presenting my JavaScript Project: a dynamic
                                Quiz Website coded with HTML, CSS, and
                                JavaScript. 🌐 Focused on hands-on learning, it
                                highlights my skills in responsive design,
                                interactivity, and aesthetic appeal. 💡 Evolving
                                continuously, this project mirrors my commitment
                                to growth in web development. #JavaScript
                                #WebDev
                            </p>
                            <br />
                            <a href="https://github.com/AnkitMourya12/quiz_website.github.io">
                                See Project on GitHub
                            </a>

                            <br />
                            <a href="https://ankitmourya12.github.io/quiz_website.github.io/">
                                {" "}
                                See Website{" "}
                            </a>
                        </div>
                    </div>
                );

            case 8:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                Aug 2023 - Sep 2023
                            </p>
                        </div>
                        <div className="education-details">
                        <h4>Project Learning</h4>
                            <p>
                                <ol>
                                    <li>
                                        Identify Key Factors
                                        to reduce attrition.  
                                    </li>
                                    <li>
                                        Improve the
                                        Hiring Process.
                                    </li>
                                    <li>
                                    Improve workforce more
                                        productive.
                                    </li>
                                    <li>
                                    Improve employee experience
                                    </li>
                                    <li>
                                    Gained employee trust.
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <a href="https://github.com/AnkitMourya12/POWER_BI_Projects">
                                See Project on GitHub
                            </a>
                        </div>
                    </div>
                );

            case 7:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                Nov 2023 - Nov 2023
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                <ol>
                                    <li>The project's primary focus was to delve
                                     into purchasing power dynamics, specifically
                                      comparing male and female spending habits 
                                      during the festive season. Utilizing pandas
                                       for data manipulation and analysis, numpy 
                                       for numerical operations, and seaborn for data
                                        visualization, I dissected the trends.</li>
                                        <li>State-wise comparisons provided insightful 
                                        regional nuances, unveiling variations in purchasing 
                                        patterns. The project aimed to uncover which gender 
                                        exhibited stronger purchasing power during Diwali festivities.</li>
                                        <li>In this Project first to understand the data and clean,replace 
                                        null value,and transform and then analyse to make EDA using Python Librarries </li>
                                </ol>
                            </p>
 <br/>
                                            <a href="https://github.com/AnkitMourya12/Diwali_sales_Analysis_project">See Project on GitHub</a>
                                                
                                            
                        </div> 
                    </div>
                );
            case 11:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                May 2023 - Jul 2023
                            </p>
                        </div>
                        <div className="education-details">
                            <p>Not upload on Gitgub very soon to deploy it</p>
                            {/* <br/>
                                            <a href="https://github.com/AnkitMourya12/quiz_website.github.io">See Project on GitHub</a>
                                                
                                            <br/>
                                            <a href="https://ankitmourya12.github.io/quiz_website.github.io/"> See Website </a> */}
                        </div>
                    </div>
                );
            case 12:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                {" "}
                                Aug 2022 - Dec 2022
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                <ol>
                                    <li>
                                        By implementing this Voting System
                                        project in C, I aimed to demonstrate my
                                        proficiency in programming and
                                        problem-solving skills. This project not
                                        only emphasizes efficiency and security
                                        but also reflects my commitment to
                                        developing solutions that contribute to
                                        fair and transparent electoral
                                        processes.
                                    </li>
                                    <li>
                                        This project is based on C language. In
                                        which 1.login function 2.Main function
                                        3. Calculate function 4.Result
                                        function.It very easy to calculate
                                        result.
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <a href="https://github.com/AnkitMourya12/Simple-votingSystem">
                                See Project on GitHub
                            </a>
                        </div>
                    </div>
                );

            case 13:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>👨‍🎓{project.name}</h3>
                            <p className="education-date">
                                
                                Apr 2024 - Apr 2024
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                            <h4>Tech Stack</h4>
                                <ol>
                                    <li>HTML,CSS
                                       
                                    </li>
                                    <li>
                                    Javascript
                                       
                                    </li>
                                    <li>
                                        React
                                    </li>
                                </ol>
                            </p>
                            <br />
                            <a href="https://github.com/AnkitMourya12/Personal_portfolio_responsive">
                                See Project on GitHub
                            </a>
                            
                        </div>
                    </div>
                );

            case 14:
                return (
                    <div>
                        <h2>{project.name}</h2>
                        <p>Yet not uploaded on Github.</p>
                    </div>
                );

            case 17:
                return (
                    
                       
                        
                   <div className="education-item">
                   <div className="education-info">
                       <h3>👨‍🎓{project.name}</h3>
                       <p className="education-date">
                           
                           Aug 2023 - Sep 2023
                       </p>
                   </div>
                   <div className="education-details">
                   <p>To analayse facebook data  </p>
                   <p>show my presentation video for final submission with my team member</p>
                        <a href="https://youtu.be/KbMBxJblfuU?si=nGdWawKnz98wF0ng">see Presentation </a>
                   
                      
                   </div>
               </div>
           );

                case 16:
                    return (
                        <div className="education-item">
                            <div className="education-info">
                                <h3>👨‍🎓{project.name}</h3>
                                <p className="education-date">
                                    
                                    Mar 2024 - Mar 2024
                                </p>
                            </div>
                            <div className="education-details">
                                <p>
                                
    
    
                                    <ol>
                                        <li>
                                        Overview:
    This machine learning project aims to predict the marks of students based on the 
    number of study hours per day. The dataset used for training and testing the model 
    consists of records from 200 university students.
                                        </li>
                                        <li>
                                        Dataset:
    The dataset contains information on 200 students including their study hours and corresponding marks.
    Initially, the dataset contains 5 null values in the independent variable (study hours).
                                        </li>
                                        <li>
                                        Data Preprocessing:
    The null values in the study hours column are replaced with the mean value of the study hours.
    This preprocessing step ensures that the dataset is clean and ready for model training.
                                        </li>
                                        <li>
    
    
                                        Model Training:
    The machine learning model is trained using the processed dataset.
    We have used a pre-trained model saved in a file named "student_mark_predictor.pkl".
    The model predicts the marks based on the input study hours.
                                        </li>
                                    </ol>
                                </p>
                                <br />
                                <a href="https://github.com/AnkitMourya12/Student_Marks_Pridiction_MLproject">
                                    See Project on GitHub
                                </a>
                            </div>
                        </div>
                    );

            case 15:
                return (
                    <div>
                        <h2>{project.name}</h2>
                        <a href="https://github.com/AnkitMourya12/React_calculator_app">
                                    See Project on GitHub
                                </a>
                    </div>
                );

            case 18:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                {" "}
                                From Internshala <br />
                                Issued Dec 2022{" "}
                            </p>
                        </div>
                        <div className="education-details">
                            <p>Credential ID: 12vd7nln1j2</p>
                            <a href="https://drive.google.com/file/d/11wXfwQM0We8aXlZHs2HfEwreQaWqfKGO/view?usp=drivesdk">
                                Show Credential
                            </a>
                        </div>
                    </div>
                );

            case 19:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                From Coursera <br />
                                Issued Nov 2022{" "}
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                Credential ID: https://coursera.org/verif
                                y/VUZ6D8GACDBH
                            </p>
                            <a href="https://drive.google.com/file/d/11mtg29DkfAW1AXFXG2dAa2rkWkvf20Jd/view?usp=drivesdk">
                                Show Credential
                            </a>
                        </div>
                    </div>
                );

            case 20:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                From Coursera <br />
                                Issued Jan 2023{" "}
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                Credential ID https://coursera.org/verif
                                y/R7QSPV7WYBY2
                            </p>
                            <a href="https://drive.google.com/file/d/1On3nUZJ9LLob40GZxctgsUNAPJt_wtSo/view?usp=drivesdk">
                                Show Credential
                            </a>
                        </div>
                    </div>
                );

            case 21:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                From NPTEL <br />
                                Issued May 2023{" "}
                            </p>
                        </div>
                        <div className="education-details">
                            <p>Completed Three Months C++ training</p>
                            <a href="https://drive.google.com/file/d/1AtnSupM_WHI5rgYyRWzVQxRCmSiIW1o0/view?usp=drivesdk">
                                Show Credential
                            </a>
                        </div>
                    </div>
                );

            case 22:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                From Nullclass <br />
                                Issued Jul 2023{" "}
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                Completed Two Months Web Development Training.{" "}
                            </p>
                            <a href="https://nullclass.com/certificates/web-development-certificate/?c=21807&u=83046">
                                Show Credential
                            </a>
                        </div>
                    </div>
                );

            case 23:
                return (
                    <div className="education-item">
                        <div className="education-info">
                            <h3>🧑‍🎓 {project.name}</h3>
                            <p className="education-date">
                                From GDSC KIIT <br />
                                Issued Jul 2023{" "}
                            </p>
                        </div>
                        <div className="education-details">
                            <p>
                                This is eight Days Bootcamp . In this bootcamp
                                to build a tic-tac-toa game it think as human AI{" "}
                            </p>
                            <a href="https://drive.google.com/file/d/1ZhZouuFXzn-4Xg0mcljVz_865H1V-vDx/view?usp=drivesdk">
                                Show Credential
                            </a>
                        </div>
                    </div>
                );
                case 25:
                    return (
                        <div className="education-item">
        <div className="education-info">
            <h3>🧑‍🎓 {project.name}</h3>
            <p className="education-date">Tcs ion Cerrier
 <br/>Issued Mar 2024 </p>
        </div>
        <div className="education-details">
        {/* <p>Credential ID l6SN9m82K91s0t15z1</p> */}
        <p>In this Course to complete Soft skills and hard skills for requirement of IT industry</p>
            {/* <a href="https://www.guvi.in/verify-certificate?id=l6SN9m82K91s0t15z1&course=ai_for_in_hi">Show Credential</a> */}
            
        </div>
    </div>
                        
                    );

                    case 24:
                        return (
                            <div className="education-item">
            <div className="education-info">
                <h3>🧑‍🎓 {project.name}</h3>
                <p className="education-date">GUVI Geek Networks, IITM Research Park
     <br/>Issued Aug 2023 </p>
            </div>
            <div className="education-details">
            <p>Credential ID l6SN9m82K91s0t15z1</p>
                <a href="https://www.guvi.in/verify-certificate?id=l6SN9m82K91s0t15z1&course=ai_for_in_hi">Show Credential</a>
                
            </div>
        </div>
                            
                        );

                        case 26:
                            return (
                                <div className="education-item">
                <div className="education-info">
                    <h3>🧑‍🎓 {project.name}</h3>
                    <p className="education-date">Hackerrank
         <br/>Issued Nov 2023 </p>
                </div>
                <div className="education-details">
                {/* <p>Credential ID l6SN9m82K91s0t15z1</p> */}
                <p>I Give the test and to solve all three problems within time</p>
                    <a href="https://www.hackerrank.com/certificates/a44c2845a51b">Show Credential</a>
                    
                </div>
            </div>
                                
                            );

                            case 27:
                                return (
                                    <div className="education-item">
                    <div className="education-info">
                        <h3>🧑‍🎓 {project.name}</h3>
                        <p className="education-date">Microsoft Azure
             <br/>Issued may 2023 </p>
                    </div>
                    <div className="education-details">
                    {/* <p>Credential ID l6SN9m82K91s0t15z1</p> */}
                    <p>In which to cover basic fundamentals of Azure</p>
                        {/* <a href="https://www.hackerrank.com/certificates/a44c2845a51b">Show Credential</a> */}
                        
                    </div>
                </div>
                                    
                                );



            default:
                return (
                    <div>
                        <h2>{project.name}</h2>
                        <p>
                            No additional information available for this
                            project.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="project-details">
            {renderProjectContent()}
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default ProjectDetails;
