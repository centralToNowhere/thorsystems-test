'use strict';

/**
 * menu controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::menu.menu', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const entity = await strapi.service('api::menu.menu').find(query);
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

    return {
      id: sanitizedEntity.id.toString(),
      categories: sanitizedEntity.categories.map((category) => {
        return {
          id: category.id.toString(),
          name: category.name,
          dishes: category.dishes.map((dish) => {
            return {
              id: dish.id.toString(),
              name: dish.name,
              price: dish.price
            }
          })
        }
      })
    }
  }
}));
