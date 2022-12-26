'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service('api::order.order').find(query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return sanitizedEntity.results.map((orderResult) => {
      return {
        id: orderResult.id.toString(),
        table: {
          id: orderResult.table.id.toString(),
          number: orderResult.table.number,
          occupied: orderResult.table.occupied
        },
        positions: orderResult.positions && orderResult.positions.map((orderPosition) => {
          return {
            id: orderPosition.id.toString(),
            quantity: orderPosition.quantity,
            dish: {
              id: orderPosition.dish.id.toString(),
              name: orderPosition.dish.name,
              price: orderPosition.dish.price
            }
          }
        })
      }
    });
  },
  async create(ctx) {
    const response = await super.create(ctx);

    return {
      ...response,
      data: {
        id: response.data.id.toString(),
        table: response.data.attributes.table.data.id,
        positions: response.data.attributes.positions.data.map((position) => {
          console.log(position)
          return {
            id: position.id.toString(),
            quantity: position.attributes.quantity,
            dish: position.attributes.dish.data.id
          }
        })
      }
    };
  }
}));
