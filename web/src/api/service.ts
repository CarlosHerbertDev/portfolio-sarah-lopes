
// import { Project } from "../types/api";
import { Project } from "customTypes/api";
import { client } from "./sanityClient";

export async function getDetailsInfo(section:string) {

    if (section === 'project') {
        const response = await client.fetch<Project[]>(`*[_type == "${section}"] | order(_createdAt asc) {_id, title, slug, description, image}`);
        return response
    } else {
        const response = await client.fetch<Project[]>(`*[_type == "${section}"]{_id, title, description, image}`);
        return response
    }

}


