const withTM = require('next-transpile-modules')(['ui']);
const withPWA = require('next-pwa');

module.exports = withTM({
  reactStrictMode: true,
});

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});
