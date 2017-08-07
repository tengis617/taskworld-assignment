import Hapi from 'hapi';
import db from './mongodb';
import routes from './routes';

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});
server.state('session', {
  ttl: 1000 * 60 * 60 * 24, // one day
  encoding: 'base64json',
  isSecure: false,
  isHttpOnly: false,
});

server.route(routes);
server.start((err) => {
  if (err) {
    throw err;
  }
  console.info('Server running at: ', server.info.uri);
});

export default server;
