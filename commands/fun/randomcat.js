const request = require('request'); 
const Discord = require("discord.js")
const resources = require('../../resources.json')
module.exports={
  aliases: ['rc'],
  run(client, message, args) {  
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let embed = new Discord.MessageEmbed()
                    .setImage(body)
                    .setColor(`${resources['embed-fun']}`)
                    .setTitle("A Cat")
                              
                   message.channel.send(embed)  
            }
        });
    }
  }