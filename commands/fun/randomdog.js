const snekfetch = require('snekfetch');
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setImage(body.url);

    message.channel.send(embed)

}
module.exports.help = {
  name: "dog",
  description:"Random dog image",
  usage:"zap randomdog"
}
