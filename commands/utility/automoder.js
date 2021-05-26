const {array} = require('../../profanity.json');
const Discord = require(`discord.js`);
module.exports = {
run(client, message){
var censorList = array;
  var myMsg = message.content;
  embed = new Discord.MessageEmbed()
  .setDescription(`Your message in ${message.guild.name} was deleted due to the following reason: \n Contains bad word \n If you think this is a error or glitch please report this to the staff. \n\n Here's your message \n ${myMsg}`)
  .setColor(`RED`);

  var c;
for (c in censorList) {
        if (myMsg.includes(censorList[c])){
            message.delete().catch(console.error);
            message.author.send(embed).catch(console.error);
            break;
        }
    };
}
}