module.exports = {
  launch: {
    devtools: true,
    dumpio: false,
    headless: process.env.HEADLESS !== 'false',
  },
  server: {
    command: 'serve .',
    port: 5000,
    launchTimeout: 10000,
    debug: true,
  },
};
