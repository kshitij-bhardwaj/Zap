const Discord = require("discord.js");
const config = require("../../config.json");
const ud = require("relevant-urban");
exports.run = async(client, message, args, discord) => {
let worder = args[0];
if(!worder) return message.channel.send("Specify a word")
let defin = await ud(args.join(' ')).catch(e => {
  message.channel.send("Word not found")
  return;
});
if (defin.example.length > 924) {
    example1 = `${defin.example.substring(0, 924)}...\nArticle is too long, click [**here**](${defin.urbanURL}) to read more!`;
} else example1= defin.example;
let embed = new Discord.MessageEmbed()
.setTitle(defin.word)
.setURL(defin.urbanURL)
.setDescription(defin.definition)
.addField("Example", example1)
.addField("Author", defin.author)
.setColor(`GREEN`)
message.channel.send(embed)
}
