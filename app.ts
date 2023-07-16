require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { graphql } = require("@octokit/graphql");
const _ = require('lodash');

const middlewares = require('./middlewares');

const app = express();
const PORT=8080;

app.use(middlewares.setHeaders);
app.use(express.json());
app.use(cors());

const routes = require('./routes');
app.use('/github_api', routes);


app.get('/', (req: any, res: any) => {
    res.send('Welcome to Github NodeJS API app!')
});

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))