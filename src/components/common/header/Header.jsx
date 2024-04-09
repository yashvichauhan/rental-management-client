import React, { useState } from "react";
import "./header.css";
import { nav } from "../../data/Data";
import { Link } from "react-router-dom";
import LoginSignupModal from '../../login/loginSignupModal';
import { useAuth } from '../../../context/AuthContext';

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <header>
        <div className='container flex'>
          <div className='logo'>
            <img src='./images/logo.png' alt='' />
          </div>
          <div className='nav'>
            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='button flex'>
            <Link to={isAuthenticated ? '/dashboard' : '/login'} className='btn1'>My Listing</Link>
            <button className='btn1' onClick={isAuthenticated ? logout : toggleModal}>
              {isAuthenticated ? 'Sign Out' : 'Sign In'}
            </button>
          </div>
          <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>
              {navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </div>
        </div>
      </header>
      <LoginSignupModal show={showModal} handleClose={toggleModal} />
    </>
  );
}

export default Header;
