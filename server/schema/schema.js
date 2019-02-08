const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
  name: 'Book',
  field: () => ({
    id: {type: GraphQLString},
    name: {type: GraphQLString},
    genre: {type: graphQLString}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  field: {
    book: {
      type: BookType,
      args: {
        id: { 
          type: GraphQLString
        }
      },
      resolve(parent, args) {
          // code to get data from db/other source
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})

