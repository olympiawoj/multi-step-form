import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSignupForm } from './SignupFormContext'

export default function ProfileForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const history = useHistory()

    const { profile, setProfile } = useSignupForm()

    function onSubmit(data) {
        console.log(data)
        setProfile(data)
        history.push('/social')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <h2>Tell us about yourself</h2>
            <input
                type="text"
                name="name"
                placeholder="What's your name?"
                defaultValue={profile.name}
                {...register("name", { required: true })} 
                />
            <p>{errors.name && 'Name is required.'}</p>
            <input
                type="email"
                name="email"
                placeholder="What's your email?"
                defaultValue={profile.email}
                {...register("email", { required: true, pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                 />
            <p>{errors.email && 'Email is required.'}</p>
            <input type="submit" value="Next" />
        </form>
    )
}