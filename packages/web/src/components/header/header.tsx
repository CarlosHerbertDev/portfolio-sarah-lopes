import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Nagation, Container } from "./style";
import MenuMobile from "@components/menu-mobile/menu-mobile";




export const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    return(
        <Container>
        <p>logo aqui</p>
        {isMobile ? (
        <MenuMobile />

        ) : (

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

        )

    }
        </Container>

    )

}