const { getAllMatchups } = require('../controllers/matchup-controller');
const { Tech, Matchup } = require('../models')

const resolvers = {
    Query: {
        getAllTech: async () => {
            return Tech.find({});
        },
        getAllMatchups: async () =>{
            return Matchup.find({})
        } ,
        getMatchup: async (parent, { matchupId }) =>{
            return Matchup.findOne({ _id: matchupId });
        }
    },

    Mutation: {
        createMatchup: async (parent, args) =>{
            console.log(args)
            return Matchup.create(args);
        },
        createVote: async (parent, { matchupId, techNum}) =>{
            return Matchup.findOneAndUpdate(
                { _id: matchupId },
                { $inc: { [`tech${techNum}_votes`]: 1 } },
                { new: true }
            )
        }
    }
};          

module.exports = resolvers