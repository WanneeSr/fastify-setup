const fastify = require('fastify')({ logger:true })

fastify.get('/', function handler (request, reply){
  reply.send({ hello: 'w0rld' })
}

// Function for Run the server!
fastify.listen({ port: 3001 }, (err) => {
  if(err){
    fatify.log.error(err)
    process.exit(1)
  }
})
