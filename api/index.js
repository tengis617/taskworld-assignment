import Hapi from 'hapi';
import mongoose from 'mongoose';
import connect from './mongodb';
import { UserPreference } from './models';

const url = 'mongodb://localhost:27017/';


const testuser = new UserPreference({
  sessionId: 'test',
  language: 'German',
  currency: 'USD',
  timeZone: '(UTC+2:00)',
  profileVisibility: 'private',
  receiveMessagesFrom: 'everyone',
  recentlyViewed: [],
  autoAddToCategoryList: 'disabled',
  smsNotifications: 'disabled',
  enableSaveButton: false,
});

// testuser.save((err, user) => {
//   if (err) return (console.log(err));
// });

UserPreference.find((err, up) => {
  if (err) return console.error(err);
  console.log(up);
});

connect(url);
const db = mongoose.connection;
// mongodb error
db.on('error', console.error.bind(console, 'connection error:'));

// mongodb connection open
db.once('open', () => {
  console.log('Mongodb connected');
});


const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 8000,
});


server.state('sessionId', {
  ttl: null,
  isSecure: true,
  isHttpOnly: true,
  encoding: 'base64json',
  clearInvalid: false,
  strictHeader: true,
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
    }).state('sessionId', { firstVisit: false });
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
  console.info('Server running at: ', server.info.uri);
});
