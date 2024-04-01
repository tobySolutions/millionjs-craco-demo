const million = require("million/compiler");
const MillionCompiler = require('@million/lint');
 
module.exports = {
  webpack: {
    plugins: [million.webpack({ auto: true })],
  },
};