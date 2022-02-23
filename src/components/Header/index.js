/* eslint-disable import/no-anonymous-default-export */
import { upload } from '@testing-library/user-event/dist/upload';
import React from 'react';
import './Header.css';

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://i.imgur.com/dLakPZ9.png"></img>
                </a>
            </div>
            <div className="header--user">
                <a href="https://github.com/rafaalmeida1">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
                </a>
            </div>
        </header>
    )
}