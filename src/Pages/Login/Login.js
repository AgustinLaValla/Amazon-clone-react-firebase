import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../db';
import './Login.css';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const history = useHistory()

    const signIn = async (ev) => {
        await ev.preventDefault();
        try {
            const resp = await auth.signInWithEmailAndPassword(email, password);
            if (resp) {
                history.push('/');
            }
        } catch (error) {
            console.log(error);
        }
    };

    const register = async (ev) => {
        await ev.preventDefault();
        try {
            const resp = await auth.createUserWithEmailAndPassword(email, password);
            if (resp) {
                history.push('/');
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png" alt="amazon logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email} onChange={ev => setEmail(ev.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={ev => setPassword(ev.target.value)} />

                    <button onClick={signIn} className="login__signInButton">Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon's fake clone Conditions of User & Sale.
                    Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>

                <button className="login__registerButton" onClick={register}>
                    Create Amazon account
                </button>
            </div>
        </div>
    )
}
