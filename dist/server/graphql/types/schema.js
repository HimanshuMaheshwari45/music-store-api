"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
exports.Schema = `#graphql
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
