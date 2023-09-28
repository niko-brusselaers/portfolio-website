import server from "bunrest";
const { MongoClient } = require('mongodb');
const app = server();

interface Project {
  name: string;
  description: string;
  image: string;
}

const mongoDBUrl = "mongodb+srv://expertLab:aspfEL@cluster0.ruiua.mongodb.net/"
const client = new MongoClient(mongoDBUrl);

//check if the server is running
app.listen(3000, () => {
  console.log('App is listening on port 3000');
});

// Get all projects
 app.get('/projects',async (req, res) => {
   try {
    await client.connect();
    const database = client.db("projects").collection("projects");
    const projects = await database.find({}).toArray();
    res.status(200).json(projects);
   } catch (error) {
    res.status(400).json(error);
   }
   finally {
    await client.close();
   }
});

// save project to database
app.post('/projects', (req, res) => {
  //TODO: save project to mongodb database
});


// Update a project details
app.put('/projects/:name', (req, res) => {
  //TODO: update project details inside mongodb database
});

// Delete a project from database
app.delete('/projects/:name', (req, res) => {
  //TODO: delete project from mongodb database
});
