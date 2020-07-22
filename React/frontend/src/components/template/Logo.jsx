import './Logo.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/cadastro_icon.png'
import React from 'react'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="logo" />
        </Link>
    </aside>