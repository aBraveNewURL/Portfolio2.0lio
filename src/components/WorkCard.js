import "../components/WorkCardStyles.css";
import React from 'react'
// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <img src={props.imgsrc} alt="projectPreview" />
            <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns"></div>
                <a href={props.view} className="btn" target="_blank" rel="noreferrer">View</a>
                <a href={props.source} className="btn btn-light" target="_blank" rel="noreferrer">Source</a>
            </div>
        </div>
    )
};

export default WorkCard