import Hapi from 'hapi';

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});

server.route({
  method: 'GET',
  path: '/api/preferences',
  handler: async function (request, reply) {
    reply('hello');
  },
});
server.route({
  method: 'POST',
  path: '/api/preferences',
  handler: async function (request, reply) {
    reply('hello');
  },
});
server.route({
  method: 'UPDATE',
  path: '/api/preferences',
  handler: async function (request, reply) {
    reply('hello');
  },
});
server.route({
  method: 'DELETE',
  path: '/api/preferences',
  handler: async function (request, reply) {
    reply('hello');
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at: ', server.info.uri);
});
