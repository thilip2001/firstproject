import { Link } from 'react-router-dom';
import './register.css';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Sign Up</span>
            <form className="registerForm">
                <label>User Name</label>
                <input type="text" className="registerInput" placeholder="Enter your UserName" />
                <label>Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email" />
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password" />
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
            <Link className="link" to="/login">LOGIN</Link>
            </button>
        </div>
    )
}

