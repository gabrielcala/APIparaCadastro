import './Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"></i> Inicio
            </Link>
            <Link to="/users">
                <i className="fa fa-users"></i> Usuários

            </Link>

            <Link to="/modalidade">
                <i className="fa fa-address-book"></i> Modalidade

            </Link>

            <Link to="/fraquencia">
                <i className="fa fa-calendar"></i> Frequencia

            </Link>
        </nav>
    </aside>