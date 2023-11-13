import { IProject } from "../shared/models/IProject"

class DatabaseService{

    async getProjects(): Promise<string[]>{
        return ["project1", "project2", "project3", "project4", "project5", "project6"]
    }

    async getProjectDetails(projectName:string): Promise<IProject>{
        return {
            name: projectName,
            description: "description",
            image: "image",
            url: "url",
            githubLink: "githubLink",
            technologies: ["tech1", "tech2", "tech3"]
        }
    }
}

export const databaseService = new DatabaseService()