const axios = require("axios");

const getSentence = async () => {
  const randomQuote = await axios.get("https://api.quotable.io/random");

  return randomQuote.data.content.split(" ");
};

module.exports = getSentence;
