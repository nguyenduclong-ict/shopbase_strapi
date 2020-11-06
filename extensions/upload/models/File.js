"use strict";

/**
 * Lifecycle callbacks for the `File` model.
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      let user;
      try {
        user = await strapi.query("user").findOne({ id: data.created_by });
      } catch (error) {}
      if (user) {
        // data.shop = user.shop || "5fa2dcd8f2e5a2d953e39da7";
      }
      data.shop = "5fa2dcd8f2e5a2d953e39da7";
      console.log("Before create File", data);
    },
  },
};
