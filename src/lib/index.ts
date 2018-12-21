import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const resolvers: any = {};

const client = new ApolloClient({
    clientState: {
        defaults: {
            isConnected: true
        },
        resolvers
        // typeDefs
    },
    uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});

client
    .query({
        query: gql`
            {
                rates(currency: "USD") {
                    currency
                }
            }
        `
    })
    .then(result => {
        console.log(result);
        return;
    });

export { client };
