const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Tech {
        _id: ID
        name: String
    }

    type Matchup {
        _id: ID
        tech1: String
        tech2: String
        tech1_votes: Number 
        tech2_votes: Number
    }
`;

module.exports = typeDefs