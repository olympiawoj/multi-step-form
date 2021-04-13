import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSignupForm } from './SignupFormContext'

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export default function StepLinks() {
    const { profile, social } = useSignupForm();

    // if profile is is not empty, then it's done
    const isProfileDone = !isEmpty(profile)

    // if social object is not empty, then it's done
    const isSocialDone = !isEmpty(social);

    return (
        <div className="step-links">
            <NavLink to="/" exact>{isProfileDone ? '♥️' : '🤍'} Profile <span /> </NavLink>
            {isProfileDone ? (
                <NavLink to="/social">{isSocialDone ? '♥️' : '🤍'} Social <span /></NavLink>
            ) : (
                <a>Social <span /></a>
            )}

            {isProfileDone && isSocialDone ? (
                <NavLink to="/review" style={{ float: 'right' }}>Review <span /></NavLink>
            ) : (
                <a style={{ float: 'right' }}>Review <span /></a>
            )}

        </div>
    )
}