const withNextIntl = require("next-intl/plugin")();

module.exports = withNextIntl({
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
});
