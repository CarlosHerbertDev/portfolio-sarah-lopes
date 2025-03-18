import { About } from "@components/about/abaout";
import { Footer } from "@components/footer/footer";
import { Header } from "@components/header/header";
import { Home } from "@components/home/home";
import { ProjectsDetails } from "@components/projects-details/projects-details";
import { Projects } from "@components/projects/projects";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


export const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:name" element={<ProjectsDetails />} />
            <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
    </BrowserRouter>
)