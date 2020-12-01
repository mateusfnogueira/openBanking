import userService from "./services/user.service";

async function routes(fastify: any) {
  const opts = {
    schema: {
      body: {
        type: "object",
        name: "users",
        properties: {
          id: { type: "number" },
          name: { type: "string" },
          lastname: { type: "string" },
          birthday: { type: "string" },
          email: { type: "string" },
          login: { type: "string" },
          password: { type: "string" },
          balance: { type: "number" },
        },
      },
    },
  };

  fastify.get("/users", async () => {
    const users = await userService.findAll();
    return users;
  });

  fastify.get("/users/:user", async (request: any) => {
    console.log(request);
    const id = request.params.user;
    const user = await userService.find(id);
    return user;
  });

  fastify.post("/users", opts, async (request: any) => {
    const user = await userService.save(request.body);
    return user;
  });

  fastify.put("/users/:users", opts, async (request: any) => {
    const id = request.params.user;
    const user = await userService.save({ ...request.body, id });

    return user;
  });

  fastify.delete("/users/:user", async (request: any) => {
    await userService.destroy(request.params.user);
    return true;
  });
}

export default routes;
