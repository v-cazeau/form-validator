import { useState } from 'react';

export default function FormValidator () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')

    const [message, setMessage] = useState('')

    const findErrors = () => {
        const errors = [] 
        if (!email || !password || !passwordConfirm) errors.push('All fields must be filled in')
        if ([...email].filter(i => i === '@').length !== 1) {
            errors.push('An email must have exactly one @ sign')
        }
        if (password.length < 8) errors.push('Passwords must be 8 characters or longer')
        if (password !== passwordConfirm) errors.push('Passwords must match')
        
        return errors
    }

    const handleSubmit = e => {
        e.preventDefault()

        const errors = findErrors()
        setMessage(errors.length ? errors.join(', ') : 'User created!')

    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Sign Up!</h2>
            </div>
            <div>
                <label htmlFor= 'email'>Email</label>
                <input
                    type= 'text' name = 'email'
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor= 'password'>Password</label>
                <input 
                    type='password' name= 'password'
                    onChange={e => setPassword(e.target.value)} />

            </div>
            <div>
                <label htmlFor= 'password-confirm'>Password Confirm</label>
                <input 
                    type='password' name='password-confirm'
                    onChange={e => setPasswordConfirm(e.target.value)}/>
            </div>
            {message}
            <input type='submit' value='Submit'/>
        </form>
    )
}