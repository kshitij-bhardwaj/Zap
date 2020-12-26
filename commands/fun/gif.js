const fetch = require("node-superfetch");
const { URLSearchParams } = require("url");
const { giftoken } = require('../config.json');

module.exports.run = async (message, args) => {
  async run(message, args) { 
    try {
      const query = args[0];
      if (!query.length) {
        return message.reply("Command Usage: `giphy <Query>`")
      }
      
      const url = "http://api.giphy.com/v1/gifs/search?";
      const params = new URLSearchParams({
        q: query,
        api_key: GIPHY_API_KEY,
        rating: "pg"
      });
      
      fetch(url + params)
      .then(res => res.json())
      .then(json => message.channel.send(json.data.random().images.original.url))
    } catch (err) {
      return message.reply(`Oh no, an error occurred: \`${err.message}\`.`);
    }



}

