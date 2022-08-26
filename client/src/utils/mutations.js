import { gql } from '@apollo/client';


export const CREATE_MATCHUP = gql`
    mutation createMatchup($tech1: String!, $tech2: String!){
        Matchup()
    } 
`