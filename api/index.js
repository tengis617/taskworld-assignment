import Hapi from 'hapi';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
  db.close();
});
const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});

server.route({
  method: 'GET',
  path: '/api/preferences',
  async handler(request, reply) {
    reply({
      language: 'English',
      currency: 'USD',
      timeZone: '(UTC+2:00)',
      profileVisibility: 'private',
      receiveMessagesFrom: 'everyone',
      recentlyViewed: [],
      autoAddToCategoryList: 'disabled',
      smsNotifications: 'disabled',
      enableSaveButton: false,
    });
  },
});
server.route({
  method: 'POST',
  path: '/api/preferences',
  handler(request, reply) {
    reply('hello');
  },
});
server.route({
  method: 'UPDATE',
  path: '/api/preferences',
  handler(request, reply) {
    reply('hello');
  },
});
server.route({
  method: 'DELETE',
  path: '/api/preferences',
  handler(request, reply) {
    reply('hello');
  },
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at: ', server.info.uri);
});
