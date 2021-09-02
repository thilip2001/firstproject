import { Link } from 'react-router-dom';
import './topbar.css';

export default function TopBar() {
    const user=false;
    return (
        <div className="top">
            <div className="topLeft">e-Education</div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/create">CREATE-COURSE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img
                className="topImage"
                src="profile.jpg" alt="" />
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                    <Link className="link" to="/login">LOGIN</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/register">REGISTER</Link>
                    </li>
                    </ul>
                )
                }
                
            <i className= "topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}