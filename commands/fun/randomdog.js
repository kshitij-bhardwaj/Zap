const snekfetch = require('snekfetch');
const Discord = require("discord.js");
const resources = require('../../resources.json')
module.exports={
  aliases: ["rd"],
  async run(client, message, args) {  

    const { body } = await snekfetch.get('https://random.dog/woof.json');
    const embed = new Discord.MessageEmbed()
    .setColor(`${resources['embed-fun']}`)
    .setImage(body.url);

    message.channel.send(embed)

}
}