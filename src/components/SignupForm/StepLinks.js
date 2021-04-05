import React from 'react'
import {NavLink} from 'react-router-dom'

export default function StepLinks(){
    return (
        <div className="step-links">
            <NavLink to="/" exact>Profile</NavLink>
            <NavLink to="/social">Social</NavLink>
            <NavLink to="/review">Review</NavLink>
        </div>
    )
}