import React from 'react'
import './css/NavBar.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <>
            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/All-birthday">BirthDays </Link>
                {/* <Link to="/login">Login</Link> */}
                {/* <Link to="/contact">Contact</Link>
                <Link to="/signup">signUp</Link> */}
            </div>
        </>
    )
}

export default NavBar