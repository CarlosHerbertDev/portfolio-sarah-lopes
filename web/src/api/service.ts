import axios from "axios";
import { client } from "./sanityClient";

interface Project {
    _id: string;
    project: string;
    description: string;
    image: {
    asset: {
        url: string;
        };
    };
}

axios

export async function getDeatisProject() {
    const response = await client.fetch<Project[]>('*[_type == "project"]{_id, project, description, image}');
    return response
    
}

