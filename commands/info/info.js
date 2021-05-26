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
const servers= client.guilds.cache.map(a=>a.name).join("\n");
    
    let helpMenu = new Menu(message.channel, message.author.id, [
            // Each object in this array is a unique page.
            {
              
                name: 'main',
              
                content: new MessageEmbed({
                    title: '**Bot Information**',
                    description: `**Serving** \n ${client.guilds.cache.size} servers with ${client.channels.cache.size} channels and ${client.users.cache.size} users. \n **Uptime** \n ${days}:${hours}:${minutes}:${seconds}\n **Ping** \n Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms\n\n\n **This bot was made by Tensor Calculus Mistakes#1729 and Lucius#3435, deemed to increase the experience of users on Discord to a better level!** `
                    
                }).setColor(`GREEN`),
                reactions: {
                    '⏹': 'delete',
                    '▶': 'number2'
                }
            },
            {
              
                name: 'number2',
              
                content: new MessageEmbed({
                    title: '**More Information**',
                    fields: [
                    {
                        name: 'Vote for our bot here! Ofcourse we are adding voting perks! Stay Tuned!',
                        value: '[Thank you!](https://top.gg/bot/790482144665403422/vote)'

                    },
                    {
                        name: 'Zap is a discord bot deemed to help discord users have fun!',
                        value: 'We have a [github](https://github.com/kshitij-bhardwaj/Zap) repo which tells you all the commands Zap holds, check it out!!'
                    },
                    {
                        name: 'Want to get hold of more commands and bot\'s support?', 
                        value: 'Join our [support server](https://discord.gg/RTh79cwxxp) to get hold of all the awesome commands, get support and take part in the bot\'s development with your AWESOME suggestions, **only our support server has**!!'
                    },
                    {
                        name: "Try out our Community Server where we have fun and learn!",
                        value: "Community server [invite](https://discord.gg/trDCV8Awuv)"
                    },
                    {
                        name: 'Want to donate?',
                        value: 'You can donate by boosting our support server(link is given above), we hope to serve you with our best, a little donation ignites us!'
                    },
                    {
                        name: 'Donation Perks?',
                        value: 'You get a place in our [`zap info`](https://github.com/kshitij-bhardwaj/Zap) command with an awesome look! \nYou can also submit your original artworks to be added into the [`zap gallery`](https://github.com/kshitij-bhardwaj/Zap) with your Name and Tag!!'
                    }
                ]
                }).setColor(`GREEN`),
                reactions: {
                    '◀': 'first',
                    '⏹': 'delete',
                    '▶': 'extra2'
                }
            },
            {
                name: 'extra2',
                content: new MessageEmbed({
                    title: 'Sponsers',
                    description: 'No sponsers yet!'
                }).setColor(`RED`),
                reactions: {
                    '◀': 'extra1',
                    '⏹': 'delete'
                }
            }
           
        ], 300000)
        helpMenu.start()
    }
