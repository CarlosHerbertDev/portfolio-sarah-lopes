import React from "react";
import { Link } from "react-router-dom";
import { Nagation, Container } from "./style";

export const Header: React.FC = () => {

    return(
        <Container>
        <p>logo aqui</p>
        <Nagation>
            <li>
                <Link to ={`/`}>Home</Link>
            </li>
            <li>
                <Link to ={`/projects`}>Projects</Link>
            </li>
            <li>
                <Link to ={`/about`}>About</Link>
            </li>
        </Nagation>
        </Container>

    )

}