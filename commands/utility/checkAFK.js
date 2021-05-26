const Discord = require(`discord.js`);
const db = require(`quick.db`);
module.exports = {
run(client, message, users){
users.forEach((user) => {
    const value = db.fetch(user.user.id + '.afk')
    if(value === true){
    const reason = db.fetch(user.user.id + '.messageafk');
    const embed = new Discord.MessageEmbed()
                      .setAuthor(user.user.tag+ ` is AFK`, user.user.displayAvatarURL({ dynamic: true, size: 256 }))
                      .setDescription(reason)
                      .setColor(`GREEN`)
                      .setFooter(`${message.author.tag}`)
                      .setTimestamp()
    return message.channel.send(embed)
      
  }
})
}
}