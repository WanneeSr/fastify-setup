const fastify = require('fastify')({ logger:true })
const util = require("node:util");
const { pipeline } = require("node:stream");
const pump = util.promisify(pipeline);
const path = require("path");
const { log } = require('node:console');
const { default: fastifyFormbody } = require('@fastify/formbody');
const { default: fastifyWebsocket } = require('@fastify/websocket');
const { Socket } = require('node:dgram');


fastify.register(require('@fastify/formbody'));
fastify.register(require("@fastify/multipart"));
fastify.register(require('@fastify/jwt'), { secret: 'lookthorwow' });
fastify.register(require('@fastify/cors'), {});
fastify.register(require('@fastify/websocket'))
fastify.register(async function (fastify) {
  fastify.get('/websocket',{ websocket:true}, (socket, req)=>{
    socket.on('message', message =>{
      socket.send('ready from server')
    })
  })
})

fastify.register(require("@fastify/static"), {
    root: path.join(__dirname, 'uploads'),
    prefix: '/uploads/',
});








fastify.get('/', function handler (request, reply){
  reply.send({ hello: 'w0rld' })
})



// Function for Run the server!
fastify.listen({ port: 3001 }, (err) => {
  if(err){
    fastify.log.error(err)
    process.exit(1)
  }
})
