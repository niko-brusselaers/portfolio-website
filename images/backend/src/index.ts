import { Elysia,t } from "elysia";
const { MongoClient, ObjectId } = require('mongodb');

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
    // Connect the client to the server
    await client.connect();
    // navigate to the projects database and projects collection
    const database = client.db("projects").collection("projects");
    // Query the database for all projects
    const projects = await database.find({}).toArray();
    // return the projects
    set.status = 200;
    return projects;
    
   } catch (error) {
    console.log(error);
    // return the error
    set.status = 400;
    return error;
   }
   finally {
    // close the connection to the database server
    await client.close();
   }
});

// save project to database
app.post('/projects', async ({body,set}) => {
  try {
    // Connect the client to the server
    await client.connect();
    // navigate to the projects database and projects collection
    const database = client.db("projects").collection("projects");
    // insert the project into the database
    const result = await database.insertOne(body);
    // return the result
    set.status = 200;
    return result;
  } catch (error) {
    console.log(error);
    // return the error
    set.status = 400;
    return error;
  }
  finally {
    // close the connection to the database server
    await client.close();
  }
  },{
  // validate the request body that all data is present and have correct types
  body:t.Object({
    name: t.String(),
    description: t.String(),
    image: t.String(),
  })
  
  
});


// Update a project details
app.put('/project/:id', async({body,set, params:{id}}) => {

  
  //TODO: update project details inside mongodb database
  try {
    // Connect the client to the server
   await client.connect();
    // navigate to the projects database and projects collection
    const database = client.db("projects").collection("projects");
    //find and update the project
    database.findOneAndUpdate({"_id": new ObjectId(id)},{$set:body});
    // return the result
    set.status = 200;
    return "project updated";

  } catch (error) {
    console.log(error);
    // return the error
    set.status = 400;
    return error;
    
  }
});

// Delete a project from database
app.delete('/project/:id', () => {
  //TODO: delete project from mongodb database
});

app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

