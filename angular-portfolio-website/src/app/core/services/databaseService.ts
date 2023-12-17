import { IProject } from "../shared/models/IProject"

class DatabaseService{

    private async getData(): Promise<any>{
        return await fetch("./assets/projects.json")
    }

    async getProjects(): Promise<string[]> {
        //get all projects 
        const response = await this.getData();
        //convert to json
        const data: IProject[] = await response.json();
        //get all project names
        const projectNames: string[] = data.map((element: IProject) => element.name);
        //return project names
        return projectNames;
    }


    async getProjectDetails(projectName:string): Promise<IProject>{
        //get all projects 
        const response = await this.getData();        
        //convert to json
        const data: IProject[] = await response.json();        
        //get project details
        const projectDetails: IProject = data.find((element: IProject) => element.name === projectName)!;
        //return project details
        return projectDetails;
    }

    async getProjectImages(projectName:string | undefined): Promise<string[]>{
        //get all projects 
        if(projectName === "") console.log("test");
               
        const response = await this.getData();        
        //convert to json
        const data: IProject[] = await response.json();        
        //if project name is undefined return array of all primary images
        if(projectName === undefined){
            const projectImages: string[] = data.map((element: IProject) => element.image[0]);
            return projectImages;
        } else{
        //get project images
            const projectImages: string[] = data.find((element: IProject) => element.name === projectName)!.image;
            return projectImages;
        }
    }
}

export const databaseService = new DatabaseService()