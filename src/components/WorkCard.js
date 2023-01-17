import "../components/WorkCardStyles.css";
import fuelfiend from "../assets/fuelfiend.png"

import React from 'react'
import { NavLink } from "react-router-dom";

const WorkCard = () => {
    return (
        <div className="work-container">
            <h1 className="project-heading">Project</h1>
            <div className="project-card">
                    <img src={fuelfiend} alt="image" />
                    <h2 className="project-title">Project Title</h2>
                    <div className="pro-details">
                        <p>This is only a text</p>
                        <div className="pro-btns"></div>
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to="url.com" className="btn">Source</NavLink>
                    </div>

                </div>
        </div>
    )
}

export default WorkCard