//npm install discord.js-menu
const { MessageEmbed } = require('discord.js')
const { Menu } = require('discord.js-menu');

module.exports.run =(client, message, args) => {
    
    let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
              
                name: 'main',
              
                content: new MessageEmbed({
                    title: '**Bot Information**',
                    description: `**Serveing** \n Number of Servers:${client.guilds.cache.size} \n Number of Channels:${client.channels.cache.size} \n Number of members: ${client.users.cache.size} \n **Features** \n \`Ram usage\`::${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB \n \`Library\`::Discord JS v${Discord.version} \n \`Host\`::${os.hostname} \n \`OS\`::${os.platform} ${os.release} \`version\`::1.0.0 -b \n`
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


