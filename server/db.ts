import { connect } from "mongoose";

const server = process.env.MONGO_SERVER;
console.log(process.env);
const serverPath = `mongodb://${server}/demodatabase`

console.log(`MongoDB Server: ${serverPath}`)

connect(serverPath);
