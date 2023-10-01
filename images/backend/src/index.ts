import { Elysia,t } from "elysia";
const { MongoClient } = require('mongodb');

const app = new Elysia()

interface Project {
  name: string;
  description: string;
  image: string;
}

const mongoDBUrl = "mongodb+srv://expertLab:aspfEL@cluster0.ruiua.mongodb.net/"
const client = new MongoClient(mongoDBUrl);

//check if the server is running


app.get('/', () => {console.log("hello world")});


// Get all projects
 app.get('/projects',async ({set}) => {
  console.log("get all projects");
  
   try {
    await client.connect();
    const database = client.db("projects").collection("projects");
    const projects = await database.find({}).toArray();
    set.status = 200;
    return projects;
    
   } catch (error) {
    set.status = 200;
    return error;
   }
   finally {
    await client.close();
   }
});

// save project to database
app.post('/projects', () => {
  //TODO: save project to mongodb database
  
  
});


// Update a project details
app.put('/projects/:name', () => {
  //TODO: update project details inside mongodb database
});

// Delete a project from database
app.delete('/projects/:name', () => {
  //TODO: delete project from mongodb database
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

