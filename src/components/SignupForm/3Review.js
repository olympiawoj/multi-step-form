import React from 'react'
import Animator from './Animator';
import { useSignupForm } from './SignupFormContext'

export default function Review() {
    const { profile, social } = useSignupForm()

    function handleSubmit(e) {
        e.preventDefault();
        alert('You are submitting! Congrats!')
    }

    return (
        <Animator>
            <form onSubmit={handleSubmit}>
                <h2>Review all your info</h2>
                <p><strong>Name</strong>: {profile.name}</p>
                <p><strong>Email</strong>: {profile.email}</p>
                <p><strong>Twitter</strong>: {social.twitter}</p>
                <p><strong>Facebook</strong>: {social.facebook}</p>
                <input type="submit" value="Submit all info" />
            </form>
        </Animator>
    )
}