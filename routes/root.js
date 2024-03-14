"use strict";

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    reply.send("Hello World!");
    //return { root: true }
  });

  // npm run devして、http://127.0.0.1:3000/identicon/aaa
  fastify.get("/identicon/:x", async (request, reply) => {
    const { x } = request.params;
    reply.send(`x is ${x}`);
  });
};
