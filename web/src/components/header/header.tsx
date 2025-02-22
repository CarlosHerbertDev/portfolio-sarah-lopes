import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {

    return(
        <header>
        <ul>
            <li>
                <Link to ={`/`}>Home</Link>
            </li>
            <li>
                <Link to ={`/projects`}>Projects</Link>
            </li>
            <li>
                <Link to ={`/about`}>About</Link>
            </li>
        </ul>
        </header>

    )

}