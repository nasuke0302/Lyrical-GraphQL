const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongo URI
const MONGO_URI = 'mongodb://localhost:27017/lyrical';
if (!MONGO_URI) {
    throw new Error('You must provide a Mongo URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
    useMongoClient: true,
});

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
