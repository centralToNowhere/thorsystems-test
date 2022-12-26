'use strict';

/**
 * order-position controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order-position.order-position', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    console.log(response.data, {
      ...response,
      data: {
        id: response.data.id.toString(),
        quantity: response.data.attributes.quantity,
        dish: response.data.attributes.dish.data.id
      }
    })
    return {
      ...response,
      data: {
        id: response.data.id.toString(),
        quantity: response.data.attributes.quantity,
        dish: response.data.attributes.dish.data.id
      }
    };
  }
}));
