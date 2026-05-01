import express from "express";
import cors from "cors";
import userServices from "./models/user-services.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello Meri!");
});

app.get("/users", (req, res) => {
  const name = req.query.name;
  const job = req.query.job;
  if(name != undefined && job != undefined) {
    userServices.findUserByNameAndJob(name, job)
      .then(result => res.send({users_list: result}))
      .catch(error => res.status(500).send({error: error.message}));
  }
  else if(name != undefined) {
    userServices.findUserByName(name)
      .then(result => res.send({ users_list: result }))
      .catch(error => res.status(500).send({ error: error.message }));
  }
  else if(job != undefined) {
    userServices.findUserByJob(job)
      .then(result => res.send({ users_list: result }))
      .catch(error => res.status(500).send({ error: error.message }));
  }
  else {
    userServices.getUsers()
      .then(result => res.send({ users_list: result }))
      .catch(error => res.status(500).send({ error: error.message }));
  }
});


app.get("/users/:id", (req, res) => {
  const id = req.params["id"];
  userServices.findUserById(id)
    .then(result => {
      if (result === null) {
        res.status(404).send("Resource not found.");
      } else {
        res.send(result);
      }
    })
    .catch(error => res.status(500).send({ error: error.message }));
});

app.delete("/users/:id", (req, res) => {
  const id = req.params["id"];
  userServices.deleteUserById(id)
    .then(result => {
      if (result === null) {
        res.status(404).send("Resource not found.");
      } else {
        res.status(204).send();
      }
    })
    .catch(error => res.status(500).send({ error: error.message }));
});

app.post("/users", (req, res) => {
  const userToAdd = req.body;
  userServices.addUser(userToAdd)
    .then(result => res.status(201).send(result))
    .catch(error => res.status(400).send({ error: error.message }));
});

app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  );
});
