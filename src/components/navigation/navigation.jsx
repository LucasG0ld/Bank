import "./navigation.css";
import Logo from "../../assets/argentBankLogo.png"
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { logout } from "../../features/authSlice";
import { selectIsLoggedIn } from '../../features/authSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { fetchUserProfile } from '../../utils/fetch';
import { updateName, selectFirstName } from "../../features/nameSlice";

function Navigation() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserProfile = async () => {
            const userProfile = await fetchUserProfile();
            if (userProfile) {
                dispatch(updateName(userProfile));
            }
        };
        getUserProfile();
    }, []);

    const handleSignOut = () => {
        dispatch(logout());
    };

    const firstName = useSelector(selectFirstName);
    

    return (
        <nav className="main-nav">
            <NavLink className="main-nav-logo" to="/">
                <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </NavLink>
            <div>
                {!isLoggedIn ? (
                    <NavLink className="main-nav-item" to="/sign-in">
                        <FontAwesomeIcon className="main-nav-item-icon" icon={faUserCircle} />
                        Sign In
                    </NavLink>
                ) : (
                    <div>
                        <NavLink className="main-nav-item" to="/user">
                            <FontAwesomeIcon className="main-nav-item-icon" icon={faUserCircle} />
                            {firstName}
                        </NavLink>
                        <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                            <FontAwesomeIcon className="main-nav-item-icon" icon={faSignOut} />
                            Sign Out
                        </NavLink>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;