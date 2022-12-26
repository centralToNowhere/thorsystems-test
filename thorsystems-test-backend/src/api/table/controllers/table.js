'use strict';

/**
 * table controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::table.table', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service('api::table.table').find(query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return sanitizedEntity.results.map((tableResult) => {
      return {
        id: tableResult.id.toString(),
        number: tableResult.number,
        occupied: tableResult.occupied
      }
    });
  }
}));
