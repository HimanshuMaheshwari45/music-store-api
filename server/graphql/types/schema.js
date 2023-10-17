import {} from "@apollo/server";

export const Schema = `#graphql
    type Person {
        id: Int
        name: String
        username:String
        email: String
        phone: String
        website: String
    }

    type Query {
        people : [Person]
    }
`;
