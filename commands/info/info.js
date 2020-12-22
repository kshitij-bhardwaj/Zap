//npm install discord.js-menu
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');

module.exports.run =(client, message, args) => {
    let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
    
    let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
              
                name: 'main',
              
                content: new MessageEmbed({
                    title: '**Bot Information**',
                    description: `**Serveing** \n ${client.guilds.cache.size} servers with ${client.channels.cache.size} channels and ${client.users.cache.size} users. \n **Uptime** \n ${days}:${hours}:${minutes}:${seconds}\n **Ping** \n Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms\n This bot was made by Tensor Calculus Mistakes#1729 and Adonis#5927, deemed to increas the expierence of users on discord to a better level! `
                }),
                reactions: {
                    '⏹': 'delete',
                    '▶': 'extra'
                }
            },
            {
                name: 'extra',
                content: new MessageEmbed({
                    title: 'Sponsers',
                    description: 'No sponsers yet!'
                }),
                reactions: {
                    '◀': 'first'
                }
            }
           
        ], 300000)
        helpMenu.start()
    }

    
    
    
    
    
    
    
    
    
    
    
    
    
    
}


