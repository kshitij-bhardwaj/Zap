const Discord = require('discord.js');

module.exports={
    aliases: ['inv'],
    async run(client, message, args) {  
    const embed= new Discord.MessageEmbed()
    .setAuthor(`Lucius#3435, Tensor Calculus Mistakes#1729`)
    .setTitle(`Invite Zap to your server!`)
    .setDescription(`We heartily **Thank You** for showing interest in supporting **Zap**, a bot made with experience, fresh insights, and for fun. We have its utility ranging from **Economy** to **Music**, **Fun** to **AutoModeration**, **Welcomer** to **Giveaway Handling**. **The Absolute Multi-Purpose Bot that Discord was waiting for, is now at your service.**\n\n We have an active [support server](https://discord.gg/RTh79cwxxp) to tackle bugs Before they arise, we shall be adding web integration with your support by using our Bot and spreading the word to you friends.`)
    .addField('Click on the hyperlink below to invite **Zap** to your server','Here is an [invite](https://discord.com/oauth2/authorize?client_id=790482144665403422&scope=bot&permissions=2117598335).', false)
    .addField("Try out our Community Server where we have fun and learn!", "Community server [invite](https://discord.gg/trDCV8Awuv)", false)
    .setColor(`GREEN`)
    .setFooter(`Zap your Server!`)
    .setTimestamp()
    message.channel.send(embed);
}
}