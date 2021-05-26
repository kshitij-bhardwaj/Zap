  
const { MessageEmbed } = require("discord.js");
module.exports = {
  aliases: ["sn"],
  async run(client, message, args) {
    const snipes = client.snipes.get(message.channel.id) || [];
    let msg="";
    if(!args[0]) msg= snipes[0];
    else msg = snipes[args[0] - 1]
    if (!msg) return message.channel.send(`There is nothing to snipe as of now. Snipe says DELETE!`);
    const Embed = new MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`)
      .setColor(`GREEN`);
    if (msg.image !== null) {Embed.setImage(msg.image); }
    message.channel.send(Embed);
  },
};