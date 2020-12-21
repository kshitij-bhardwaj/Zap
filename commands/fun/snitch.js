const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const snitches = client.snipes.get(message.channel.id) || [];
    const msg = snitches[args[0] - 1 || 0];
    if (!msg) return message.channel.send(`What do I snitch?`);
    const Embed = new MessageEmbed()
      .setAuthor(
        msg.author.tag,
        msg.author.displayAvatarURL({ dynamic: true, size: 256 })
      )
      .setDescription(msg.content)
      .setFooter(`Date: ${msg.date} | ${args[0] || 1}/${snipes.length}`);
    if (msg.attachment) Embed.setImage(msg.attachment);
    message.channel.send(Embed);
  },
};
module.exports = {
  name: "snitch",
  description: "Just snitch a deleted message",
  usage: "snitch <number>",
  category: "fun"
}
