"use strict";

/**
 * auth.js controller
 *
 * @description: A set of functions called "actions" of the `auth` plugin.
 */

module.exports = {
  /**
   *
   * @param {Context} ctx
   */
  async facebook(ctx) {
    const { access_token, shopId } = ctx.request.body;
    const shop = await strapi.query("shop").find({ id: shopId });
    if (!shop) {
      return ctx.sendError({ statusCode: 401 });
    }
    ctx.send(shop);
  },
};
