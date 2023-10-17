import {} from "@apollo/server";

export const Schema = `#graphql
    type Person {
        _id: String
        id: Int
        name: String
        username:String
        email: String
        phone: String
        website: String
    }

    type Query {
        people(sort: String) : [Person]
    }
`;
