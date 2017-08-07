import { UserPreference, DefaultPreference } from './models';
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
        const newPreference = DefaultPreference;
        newPreference.userId = cookie.userId;
        // save it!
        await new UserPreference(newPreference).save((err) => {
          if (!err) {
            // return new preference
            reply(newPreference).state('session', cookie).code(200);
          } else {
            reply(err).code(500);
          }
        });
      } else {
        const userPreference = await UserPreference.findOne({ userId: cookie.userId }, '-_id');
        if (!userPreference) {
          reply('couldn not find user').code(401);
        } else {
          await reply(userPreference).code(200);
        }
      }
    },
  },
  {
    method: ['PUT', 'POST'],
    path: '/api/preferences',
    async handler(request, reply) {
      const cookie = request.state.session;
      const newPreference = request.payload;
      if (!cookie) {
        reply('unauthorized: no cookie ').code(401);
      } else {
        const userPreference = await UserPreference.findOneAndUpdate(
          { userId: cookie.userId },
          newPreference,
          { new: true },
        );
        if (userPreference) {
          reply(userPreference).code(201);
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
        reply('unauthorized').code(401);
      } else {
        await UserPreference.findOneAndRemove({ userId: cookie.userId }, (err) => {
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
