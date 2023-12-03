module.exports = {
  // ... other configurations

  compilers: {
    solc: {
      version: "^0.8.0",
    },
  },

  networks: {
   development: {
      host: "127.0.0.1",     // Localhost (default: ganache-cli running locally)
      port: 7545,            // Port of your Ganache instance
      network_id: "*",       // Any network ID (match any network)
    }
  },
};
