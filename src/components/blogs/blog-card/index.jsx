// import React from "react";

// import Arrow from "../../shared/arrow";

// import "./style.scss";

// const BlogCard = ({ user, date, image, title, description }) => {
//     return (
//         <div className="blog-card">
//             <div className="image-section">
//                 <img
//                     src={image}
//                     alt={title}
//                 />
//             </div>
//             <div className="content-section">
//                 <div className="info-bar">
//                     <div className="user-name">By {user}</div>
//                     <div className="posted-date">{date}</div>
//                 </div>
//                 <h3>{title}</h3>
//                 <p>{description}</p>
//                 <div className="readmore-cta">
//                     <span className="text">Read More</span>
//                     <Arrow />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogCard;



// import React, { useState } from "react";
// import "./style.scss";
// import Arrow from "../../shared/arrow";
// import InternshipExperienceCard from "../InternshipExperience"; // Import the new component

// const BlogCard = ({ user, date, image, title, description }) => {
//   const [showInternship, setShowInternship] = useState(false);

//   const handleReadMoreClick = () => {
//     setShowInternship(true);
//   };

//   const handleBackClick = () => {
//     setShowInternship(false);
//   };

//   return (
//     <div className="blog-card">
//       <div className="image-section">
//         <img src={image} alt={title} />
//       </div>
//       <div className="content-section">
//         <div className="info-bar">
//           <div className="user-name">By {user}</div>
//           <div className="posted-date">{date}</div>
//         </div>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {!showInternship && (
//           <div className="readmore-cta" onClick={handleReadMoreClick}>
//             <span className="text">Read More</span>
//             <Arrow />
//           </div>
//         )}
//         {showInternship && <InternshipExperienceCard onBackClick={handleBackClick} />}
//       </div>
//     </div>
//   );
// };

// export default BlogCard;


// import React, { useState } from "react";
// import "./style.scss";
// import Arrow from "../../shared/arrow";
// import InternshipExperienceCard from "../InternshipExperience"; // Import the new component

// const BlogCard = ({ user, date, image, title, description, internshipDetails }) => {
//   const [showInternship, setShowInternship] = useState(false);

//   const handleReadMoreClick = () => {
//     setShowInternship(true);
//   };

//   const handleBackClick = () => {
//     setShowInternship(false);
//   };

//   return (
//     <div className="blog-card">
//       <div className="image-section">
//         <img src={image} alt={title} />
//       </div>
//       <div className="content-section">
//         <div className="info-bar">
//           <div className="user-name">By {user}</div>
//           <div className="posted-date">{date}</div>
//         </div>
//         <h3>{title}</h3>
//         <p>{description}</p>
//         {!showInternship && (
//           <div className="readmore-cta" onClick={handleReadMoreClick}>
//             <span className="text">Read More</span>
//             <Arrow />
//           </div>
//         )}
//         {showInternship && <InternshipExperienceCard details={internshipDetails} onBackClick={handleBackClick} />}
//       </div>
//     </div>
//   );
// };

// export default BlogCard;

import React, { useState } from "react";
import Arrow from "../../shared/arrow";
import "./style.scss";
import BlogDetails from "../InternshipExperience"; // Import the new component
//import InternshipExperienceCard from "../InternshipExperience";

const BlogCard = ({ user, date, image, title, description }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleReadMoreClick = () => {
        setShowDetails(true);
    };

    const handleBackClick = () => {
        setShowDetails(false);
    };

    return (
        <div className="blog-card">
            <div className="image-section">
                <img src={image} alt={title} />
            </div>
            <div className="content-section">
                <div className="info-bar">
                    <div className="user-name">By {user}</div>
                    <div className="posted-date">{date}</div>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                {!showDetails && (
                    <div className="readmore-cta" onClick={handleReadMoreClick}>
                        <span className="text">Read More</span>
                        <Arrow />
                    </div>
                )}
                {showDetails && <BlogDetails title={title} />}
                {showDetails && <button onClick={handleBackClick}>Back</button>}
            </div>
        </div>
    );
};

export default BlogCard;
