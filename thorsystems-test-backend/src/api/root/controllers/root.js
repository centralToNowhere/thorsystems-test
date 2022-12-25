'use strict';

/**
 * root controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::root.root');
