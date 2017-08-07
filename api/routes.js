import { User, DefaultPreferences } from './models';
import createCookie from './cookie';

const routes = [
  {
    method: 'GET',
    path: '/api/preferences',
    config: {
      state: {
        parse: true,
        failAction: 'error',
      },
    },
    async handler(request, reply) {
      let cookie = request.state.session;
      if (!cookie) {
        // create cookie and new preference from default
        cookie = createCookie();
        const newUser = {};
        newUser.id = cookie.userId;
        newUser.preferences = DefaultPreferences;
        // save it!
        await new User(newUser).save((err) => {
          if (!err) {
            // return new preference
            reply(newUser).state('session', cookie).code(200);
          } else {
            console.log(newUser);
            reply(err).code(500);
          }
        });
      } else {
        const user = await User.findOne({ id: cookie.userId }, '-_id');
        if (!user) {
          reply('couldn not find user').code(401);
        } else {
          await reply(user).code(200);
        }
      }
    },
  },
  {
    method: ['PUT', 'POST'],
    path: '/api/preferences',
    async handler(request, reply) {
      const cookie = request.state.session;
      const newUserPreferences = request.payload.preferences;
      if (!cookie) {
        reply('unauthorized: no cookie ').code(401);
      } else {
        const user = await User.findOneAndUpdate(
          { id: cookie.userId },
          { preferences: newUserPreferences },
          { new: true },
        );
        if (user) {
          reply(user).code(201);
        } else {
          reply('error: unable to find preference').code(400);
        }
      }
    },
  },
  {
    method: ['DELETE'],
    path: '/api/preferences',
    async handler(request, reply) {
      const cookie = request.state.session;
      if (!cookie) {
        reply('error: unauthorized').code(401);
      } else {
        await User.findOneAndRemove({ userId: cookie.userId }, (err) => {
          if (err) {
            reply(err).code(400);
          } else {
            reply('deleted!').code(200);
          }
        });
      }
    },
  },
];

export default routes;
