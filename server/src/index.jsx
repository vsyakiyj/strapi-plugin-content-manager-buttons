export default {
  register() {},
  bootstrap() {},
  destroy() {},

  config: {
    default: {
      contentTypes: [],
    },
    validator(config) {
      if (!config || !Array.isArray(config.contentTypes)) {
        throw new Error('test-plugin: contentTypes must be an array');
      }

      for (const item of config.contentTypes) {
        if (typeof item.uid !== 'string' || !item.uid) {
          throw new Error('test-plugin: each content type must have uid');
        }

        if (item.field && typeof item.field !== 'string') {
          throw new Error('test-plugin: field must be a string');
        }
      }
    },
  },

  controllers: {
    config: ({ strapi }) => ({
      async get(ctx) {
        const pluginConfig = strapi.config.get('plugin::test-plugin', {
          contentTypes: [],
        });

        ctx.body = pluginConfig;
      },
    }),
  },

  routes: [
    {
      method: 'GET',
      path: '/config',
      handler: 'config.get',
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};