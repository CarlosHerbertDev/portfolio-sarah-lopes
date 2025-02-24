
// import { Project } from "../types/api";
import { Project } from "customTypes/api";
import { client } from "./sanityClient";

export async function getDeatisHome() {
    const response = await client.fetch<Project[]>('*[_type == "home"]{_id, title, description, image}');
    return response
    
}
export async function getDeatisAbout() {
    const response = await client.fetch<Project[]>('*[_type == "about"]{_id, title, description, image}');
    return response
    
}
export async function getDeatisProject() {
    const response = await client.fetch<Project[]>('*[_type == "project"]{_id, title, slug, description, image}');
    return response
    
}

export async function getDetailsInfo(section:string) {

    if (section === 'project') {
        const response = await client.fetch<Project[]>(`*[_type == "${section}"]{_id, title, slug, description, image}`);
        return response
    } else {
        const response = await client.fetch<Project[]>(`*[_type == "${section}"]{_id, title, description, image}`);
        return response
    }

}


