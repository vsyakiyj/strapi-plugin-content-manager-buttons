'use strict';

module.exports = {
  register() {},
  bootstrap() {},
  destroy() {},

  config: {
    default: {
      contentTypes: [],
    },
    validator(config) {
      if (!config || !Array.isArray(config.contentTypes)) {
        throw new Error('content-manager-actions: contentTypes must be an array');
      }

      for (const item of config.contentTypes) {
        if (typeof item.uid !== 'string' || !item.uid) {
          throw new Error('content-manager-actions: each content type must have uid');
        }

        if (item.field && typeof item.field !== 'string') {
          throw new Error('content-manager-actions: field must be a string');
        }
      }
    },
  },
};