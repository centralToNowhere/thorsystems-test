'use strict';

/**
 * root service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::root.root');
