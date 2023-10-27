"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const http_1 = __importDefault(require("http"));
const express4_1 = require("@apollo/server/express4");
const drainHttpServer_1 = require("@apollo/server/plugin/drainHttpServer");
const server_1 = require("@apollo/server");
const cors_1 = __importDefault(require("cors"));
const phonebook_1 = require("../shared/phonebook");
const people_1 = __importDefault(require("./router/people"));
require("./db");
const schema_1 = require("./graphql/types/schema");
const index_1 = __importDefault(require("./graphql/resolvers/index"));
const product_1 = __importDefault(require("./router/product"));
const user_1 = __importDefault(require("./router/user"));
const logging_1 = require("./middleware/logging");
const socket_io_1 = require("socket.io");
const handler_1 = require("./socketio/handler");
dotenv_1.default.config();
async function main() {
    exports.app = (0, express_1.default)();
    const port = 4000;
    const httpServer = http_1.default.createServer(exports.app);
    const io = new socket_io_1.Server(httpServer, {
        cors: {
            origin: "*",
        },
    });
    (0, handler_1.IOHandler)(io);
    const server = new server_1.ApolloServer({
        typeDefs: schema_1.Schema,
        resolvers: index_1.default,
        plugins: [(0, drainHttpServer_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
    });
    exports.app.set("view engine", "ejs");
    exports.app.set("views", path_1.default.join(process.cwd(), "server/views"));
    exports.app.use((0, cors_1.default)());
    exports.app.use(express_1.default.json());
    await server.start();
    exports.app.use(logging_1.logging);
    exports.app.use("/people", people_1.default);
    exports.app.use("/product", product_1.default);
    exports.app.use("/user", user_1.default);
    exports.app.get("/list", async (req, res) => {
        const data = await (0, phonebook_1.listContacts)();
        res.json(data);
    });
    exports.app.post("/add", async (req, res) => {
        const { name, number } = req.body;
        const data = await (0, phonebook_1.addContact)(name, number);
        res.json(data);
    });
    exports.app.use("/graphql", (0, express4_1.expressMiddleware)(server, {}));
    httpServer.listen(port);
}
main();
