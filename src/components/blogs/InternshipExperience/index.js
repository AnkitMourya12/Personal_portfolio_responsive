// import React from "react";
// import "./style.scss";

// const InternshipExperienceCard = ({ onBackClick }) => {
//   return (
//     <div className="internship-experience-card">
//       <div className="internship-content">
//         {/* Content of internship experience */}
//         <h3>Internship Experience</h3>
//         <p>In this Internship my role is team lead and the end of this internship to submit a facebook data analysis project with my team member<br/>
//         <a href="https://youtu.be/KbMBxJblfuU?si=gm4QHn929g3FJ5pv">My final Presentation Link</a></p>
//       </div>
//       <button className="back-button" onClick={onBackClick}>
//         Back
//       </button>
      
//     </div>
    
    
//   );
// };

// export default InternshipExperienceCard;



// // import React from "react";
// // import Arrow from "../../shared/arrow";

// // const InternshipExperienceCard = ({ internshipDetails, onBackClick }) => {
// //     return (
// //         <div className="internship-experience-card">
// //             <div className="content-section">
// //                 <div className="info-bar">
// //                     <div className="user-name">By {internshipDetails.user}</div>
// //                     <div className="posted-date">{internshipDetails.date}</div>
// //                 </div>
// //                 <h3>{internshipDetails.title}</h3>
// //                 <p>{internshipDetails.description}</p>
// //                 <div className="back-cta" onClick={onBackClick}>
// //                     <Arrow />
// //                     <span className="text">Back</span>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default InternshipExperienceCard;

import React from "react";
import "./style.scss";

const InternshipExperienceCard = ({ title }) => {
    // Function to get details based on the title
    const getDetails = (title) => {
        switch (title) {
            case "Data Analyst intern":
                return (
                  <> <p> 👨‍💼 In this Internship my role is team lead and the end of this internship to submit a facebook data analysis project with my team member
                <a href="https://youtu.be/KbMBxJblfuU?si=gm4QHn929g3FJ5pv">My final Presentation Link</a> </p>
                </>);
            case "Full stack Intern":
                return (
                  <><p>In this internship I had done My trainning in 3 months and making project of stackoverflow clone only frontend is completed
                <a href="https://github.com/AnkitMourya12">link is soon</a> </p>
              </>
              );
                case "Campus Ambassador":
                return "In this Campus Ambassador program  my work is to make network of student to aware TRYST IIT delhi events and to circulate templates and on the date of event I got opportunity to visite IIT Delhi.";
           
                case "Swiggy (Bundle Technologies Pvt Ltd) Internship":
                return " I am working on swiggy site to collect data and make Excel sheet ";
            default:
                return "No details available";
        }
    };

    const details = getDetails(title);

    return (
        <div className="blog-details">
            {/* <h3>{title}</h3> */}
            <p>{details}</p>
        </div>
    );
};

export default InternshipExperienceCard;
