import fastify from "fastify";
import user from "./user";
import fastifyCors from "fastify-cors";
import { Sequelize } from "sequelize";
import { init as userInit } from "./models/User";

const sequelize = new Sequelize("sqlite::memory:");
sequelize.authenticate().then(async () => {
  console.log("Connection has been established successfully.");
  await userInit();
});

const server = fastify({
  logger: true,
});

server.get("/ping", async (_, __) => "pong\n");

server.register(fastifyCors);
server.register(user);

server.listen(3000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
