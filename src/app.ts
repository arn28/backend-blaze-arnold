import dotenv from "dotenv";
import { genPeople } from "./helpers/genPeople";
import { genProducts } from "./helpers/genProducts";
import { genSuppliers } from "./helpers/genSuppliers";
dotenv.config();
import { Server } from "./models/Server";

const server = new Server();
server.listen();