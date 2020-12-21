const Discord = require('discord.js')

exports.run = (client, message, args) => {
       
    String.prototype.embedify = function() {
        return new Discord.MessageEmbed().setColor(#ffccdd).setDescription(this)
    }
    
    let snipe = client.snipeMap.cache.find(message.guild.id)
    if(!snipe) return message.channel.send('There\'s nothing to snitch'.embedify())

    if(args[0] == 'image') {
        if(!args[1]) return message.channel.send('Please provide a message to retrieve the image from!'.embedify())
        let image = snipe[args[1] - 1]
        if(!image[1]) return message.channel.send('That message does not have an attached (deleted) image!'.embedify())
        console.log(image[1])
        return message.channel.send(new Discord.MessageEmbed().setColor(client.config.embedColor).setImage(image[1]))
    }

    let counter = 0

    return message.channel.send(`${snipe.map(msg => `**${++counter} -** ${msg[0].content ? `${msg[0].content}${!msg[1] ? '' : '\n[IMAGE WAS DELETED]'}` : (!msg[1] ? '' : '[IMAGE WAS DELETED]')}\n**Author -** <@${msg[0].author.id}>`).join('\n\n')}`.embedify().addField('NOTE:', `Message appear in order, newest deleted message is \`1.\` ,etc. Only the last five deleted messages are preserved. Messages above a 200 character limit are truncated to fit within the embed. **Due to popular request, one image is now preserved from each message if an image was present!**\nTo view the images, please type \`zap snipe image <number of message to get the image from>\``))
}
exports.help = {
    type: "fun",
    name: "snitch",
    description: "The `snitch` command snitches the lastly deleted message.",
    usage: "`zap snitch`"
}
