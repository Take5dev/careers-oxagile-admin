'use strict';

/**
 * team-presence service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::team-presence.team-presence');
