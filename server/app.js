const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

// connect to database
mongoose.connect('mongodb://localhost:27017/test');
mongoose.connection.once('open', () => {
	console.log('connected to local mongodb');
});

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(4000, () => {
	console.log('app is listening on port 4000');
});


