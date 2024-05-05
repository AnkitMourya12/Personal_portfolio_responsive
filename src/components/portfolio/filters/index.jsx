import React, { useState } from "react";

import "./style.scss";

const filtersData = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Project",
        id: "product",
    },
    {
        name: "ML & Data Analytics Project",
        id: "web-page",
    },
    {
        name: "Educations",
        id: "web-app",
    },
    {
        name: "Certifications",
        id: "mobile-app",
    },
    // add new content
    {
        name: "Volunteering",
        id: "volent",
    },
];

const Filters = ({ filterProjects }) => {
    const [active, setActive] = useState("");

    const clickHandler = (id) => {
        setActive(id);
        filterProjects(id);
    };

    return (
        <ul className="filters-menu-items">
            {filtersData.map((item) => (
                <li
                    key={item.id}
                    className={`filter-menu-item ${
                        active === item.id ? "active" : ""
                    }`}
                    onClick={() => clickHandler(item.id)}
                >
                    {item.name}
                </li>
            ))}
        </ul>
    );
};

export default Filters;
