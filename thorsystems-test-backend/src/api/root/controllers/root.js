'use strict';

/**
 * root controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::root.root', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service('api::root.root').find(query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return {
      id: sanitizedEntity.id.toString(),
      occupiedTable: sanitizedEntity.occupiedTable ? {
        id: sanitizedEntity.occupiedTable.id.toString(),
        number: sanitizedEntity.occupiedTable.number,
        occupied: sanitizedEntity.occupiedTable.occupied
      } : null
    }
  }
}));
