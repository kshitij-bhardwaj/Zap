const request = require('request'); 
const Discord = require("discord.js")

module.exports={
  aliases: ['rc'],
  run(client, message, args) {  
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let embed = new Discord.MessageEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("A Cat")
                              
                   message.channel.send(embed)  
            }
        });
    }
  }