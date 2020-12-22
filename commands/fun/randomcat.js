const request = require('request'); 
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
        request('http://edgecats.net/random', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                    let embed = new Discord.RichEmbed()
                    .setImage(body)
                    .setColor("#00ff00")
                    .setTitle("A Cat")
                              
                   message.channel.send(embed)  
            }
        });
    }

module.exports.help = {
  name:"cat",
  usage:"zap randomcat",
  description"Brings up a random cat from no where"
}
