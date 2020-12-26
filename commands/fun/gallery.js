const { MessageEmbed } = require("discord.js");
const { Menu } = require('discord.js-menu');

module.exports.run =(client, message, args) => {
    let galleryMenu = new Menu(message.channel, message.author.id, [
        // Each object in this array is a unique page.
        {
          
            name: 'main',
          
            content: new MessageEmbed({
                title: `**Works of Zap Team**`
                
            }).setImage(`https://cdn.discordapp.com/attachments/783336944712810506/791819280144400444/Unagi.png`)
              .setFooter(`Made by Tensor Calculus Mistakes#1729`)
              .setColor(`#2C2F33`),
            reactions: {
                '⏹': 'delete',
                '▶': 'next'
            }

        },
        {
            
            name: 'next',
        
            content: new MessageEmbed({
            title: `**Works of the Zap Team**`,
            }).setImage(`https://cdn.discordapp.com/attachments/760871576467013642/791896013627195392/0001-14828058780_20201225_104137_0000.png`)
              .setFooter(`Made by Adonis#5927`)  
              .setColor(`#2C2F33`),
            reactions: {
                '◀': 'first',
                '⏹': 'delete',
                '▶': 'next'
                
            }
        },
        {
            
            name: 'next',
        
            content: new MessageEmbed({
            title: `**Works of the Zap Team**`,
            }).setImage(`https://cdn.discordapp.com/attachments/783336944712810506/791820715821105162/Christmas.png`)
              .setFooter(`Made by Tensor Calculus Mistakes#1729`)  
              .setColor(`#2C2F33`),
            reactions: {
                '◀': 'first',
                '⏹': 'delete',
                '▶': 'next'
                
            }
        },
        {
            
            name: 'next1',
        
            content: new MessageEmbed({
            title: `**Works of the Zap Team**`,
            }).setImage(`https://cdn.discordapp.com/attachments/783336944712810506/791894228174635008/Banner.png`)
              .setFooter(`Made by Tensor Calculus Mistakes#1729`)  
              .setColor(`#2C2F33`),
            reactions: {
                '⏹': 'delete',
                '◀': 'previous'
            }
        }
    ])
    galleryMenu.start()
}
