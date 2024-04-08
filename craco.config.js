const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "source/"), 
    },
  },
  babel: {
    plugins: [
      ["abel/plugin-proposal-de"], 
    ],
  },
};
