const { MessageEmbed } = require("discord.js");
const { Menu } = require("discord.js-menu");

module.exports.run = (client, message, args) => {
  let pMenu = new Menu(message.channel, message.author.id, 
    
    [{
        name: 'first',
        content: new MessageEmbed({
        title: `<a:yeetdance:793784860543418388>**Fun Commands**<a:yeetdance:793784860543418388>`,
        description: `\`Default Prefix is zap\`\n \`Server prefix ${client.config.prefix}\``,
        color: "GREEN",
        footer:"Page 1 of 4",
        fields: [
        {
            name: `\`${client.config.prefix} akistart\``,
            value: "Successfully identifies the character you are thinking about",
            inline: true
        },
        {
            name: `\`${client.config.prefix} 8ball [question]\``,
            value: "Provides a definite answer to your questions(no need to trust it though)",
            inline: true
        },
        {
            name: `\`${client.config.prefix} hug [@mention]\``,
            value: "Hugs the mentioned user(not fr)",
            inline: true
        },
        {
            name:  `\`${client.config.prefix} slap [@mention]\``,
            value: "Slaps the mentioned users(not fr)",
            inline: true
        },
      
        {
            name: `\`${client.config.prefix} poke [@mention]\``,
            value: "Pokes the mentioned user(not fr)",
            inline: true
        },
        {
            name: `\`${client.config.prefix} meme\``,
            value: "Random meme from **Reddit**",
            inline: true
        },
        {
            name: `\`${client.config.prefix} dank\``,
            value: "Dank meme from **Reddit**",
            inline: true
        },
        {
          name: `\`${client.config.prefix} gallery\``,
          value: "Displays a gallery with regularly udated Images by the Developers",
          inline: true
        },
        {
          name: `\`${client.config.prefix} randomcat\``,
          value: "A random cat embed",
          inline: true
        },
        {
          name: `\`${client.config.prefix} randomdog\``,
          value: "A random dog embed",
          inline: true
        },
        {
          name: `\`${client.config.prefix} showerthoughts\``,
          value: "Thoughts from **Reddit**",
          inline: true
        },
        {
          name: `\`${client.config.prefix} wholesome\``,
          value: "Wholesomes from **Reddit**",
          inline: true
        },
        {
          name: `\`${client.config.prefix} wiki [search-query]\``,
          value: "Displays information about your search from **Wikipedia** itself",
          inline: true
        },
        {
          name: `\`${client.config.prefix} weather [location-name]\``,
          value: "Provides weather in the location you specify",
          inline: true
      },


        ],
      }),
      reactions: {
        '⏹': 'delete',
        '▶': 'second'
      }
    },

      {
        name: 'second',
        content: new MessageEmbed({
        title: `<a:Coin:791741559506337832>**Economy Commands**<a:Coin:791741559506337832>`,
        description: `\`Default Prefix is zap\`\n \`Server prefix ${client.config.prefix}\``,
        color: "GREEN",
       footer:"Page 2 of 4",
        fields: [{
            name: `\`${client.config.prefix} beg\``,
            value: "Begs from a random stranger",
            inline: true
          },
          {
            name: `\`${client.config.prefix} buy\``,
            value: "Enables you to buy from our ever-increasing store",
            inline: true
          },
          {
            name: `\`${client.config.prefix} daily\``,
            value: "Gives you a reward DAILY",
            inline: true
          },
          {
            name: `\`${client.config.prefix} weekly\``,
            value: "Gives you a reward EVERY WEEK",
            inline: true
          },
          {
            name: `\`${client.config.prefix} monthly\``,
            value: "Gives you a huge reward EVERY MONTH(On premium guilds)",
            inline: true
          },
          {
            name: `\`${client.config.prefix} pay [@mention] [amount]\``,
            value: "Allows you to give your fellow mentioned mate some of your hard-earned Zappies",
            inline: true
          },
          {
            name: `\`${client.config.prefix} profile [@mention](optional)\``,
            value: "Shows you your impressive profile",
            inline: true
          },
          {
            name: `\`${client.config.prefix} removemoney [@mention] [amount]\``,
            value: "Allows server managers to penalize offenders(Administrator Comamnd)",
            inline: true
          },
          {
            name: `\`${client.config.prefix} rob [@mention]\``,
            value: "Command for the theives. Allows you to rob the wallets of other users in your server",
            inline: true
          },
          {
            name: `\`${client.config.prefix} roulette [color] [amount]\``,
            value: "Gamble your coins, in hopes of winning more.",
            inline: true
          },
          {
            name: `\`${client.config.prefix} slots [amount]\``,
            value: "Similarly, gamble your coins, in hopes of winning more, in an interesting way",
            inline: true
          },
          {
            name: `\`${client.config.prefix} store\``,
            value: "Check out our ever-increasing collection of items",
            inline: true
          },
          {
            name: `\`${client.config.prefix} deposit [amount]\``,
            value: "Deposit the money you have in your wallet, to your bank",
            inline: true
          },
          {
            name: `\`${client.config.prefix} withdraw [amount]\``,
            value: "Take some money out in your wallet to use.",
            inline: true
          },
          {
            name: `\`${client.config.prefix} work\``,
            value: "Work hard, Earn Money, Rise in the Leaderboard, Good luck!",
            inline: true
          },
        ],}),
        reactions: {
          '◀': 'first',
          '⏹': 'delete',
          '▶': 'third'
        }
      },
      {
        name: 'third',
        content: new MessageEmbed({
        title: `<a:nitro_s:790166844799451198>**Info**<a:nitro_s:790166844799451198>`,
        description: `\`Default Prefix is zap\`\n \`Server prefix ${client.config.prefix}\``,
        footer:"Page 3 of Page 4",
        color: "GREEN",
        fields: [{
            name: `\`${client.config.prefix} info\``,
            value: "Information about the bot",
            inline: true
          },
          {
            name: `\`${client.config.prefix} help\``,
            value: "The command you are using right now",
            inline: true
          },
          {
            name: `\`${client.config.prefix} invite\``,
            value: "Provides you with a link to invite **Zap** to your server",
            inline: true
          },
      
          
          
        ],}),
         reactions: {
          '◀': 'second',
          '⏹': 'delete',
          '▶': 'last'
         }
        },
        {
          name: 'last',
        content: new MessageEmbed({
        title: `<a:classicdiamond:793784776719859732>**Music Commands**<a:classicdiamond:793784776719859732>`,
        description: `\`Default Prefix is zap\`\n \`Server prefix ${client.config.prefix}\``,
        color: "GREEN",
       footer:"Page 4 of 4",
        fields: [{
            name: `\`${client.config.prefix} play [song-name, song-URL]\``,
            value: "Plays a Music from Youtube using URLs and Search Queries",
            inline: true
          },
          {
            name: `\`${client.config.prefix} leave\``,
            value: "Leaves the channel and erases the ongoing queue",
            inline: true
          },
          {
            name: `\`${client.config.prefix} nowplay\``,
            value: "Displays the song name that is currently being played",
            inline: true
          },
          {
            name: `\`${client.config.prefix} queue\``,
            value: "Displays the ongoing queue",
            inline: true
          },
          {
            name: `\`${client.config.prefix} skip\``,
            value: "Skips the current song and moves onto the next in the ongoing queue",
            inline: true
          },
          {
            name: `\`${client.config.prefix} pause\``,
            value: "Pauses the current song being played",
            inline: true
          },
          {
            name: `\`${client.config.prefix} resume\``,
            value: "Resumes the song which was currently paused",
            inline: true
          },
          {
            name: `\`${client.config.prefix} volume [value(between 0 and 10)]\``,
            value: "Leaves the channel and erases the ongoing queue",
            inline: true
          }
        ],}),
        reactions: {
          '◀': 'third',
          '⏹': 'delete',
        }
        }
    ])
    pMenu.start();
  }
      
/* const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
  if(args[0]=== 'economy'){
    const embed1= new Discord.MessageEmbed()
    .setTitle(`<a:Coin:791741559506337832>Economy Commands`)
    .setDescription('`balance` `beg` `buy` `daily` `deposit` `monthly` `pay` `profile` `removemoney(Admin Command)` `rob` `roulette` `slots` `store` `weekly` `withdraw` `work`')
    .setFooter(`zap [command-name]`)
    .setColor(`GREEN`)
    message.channel.send(embed1);
   } 
   else if(args[0]=== 'fun'){
    const embed2= new Discord.MessageEmbed()
    .setTitle(`<a:zoukParrot:787890860518932570>Fun Commands`)
    .setDescription('`8ball` `advice` `akistart` `dank` `gallery` `hug` `meme` `poke` `randomcat` `randomdog` `showerthoughts` `slap` `weather` `wholesome` `wikipedia`')
    .setFooter(`zap [command-name]`)
    .setColor(`GREEN`)
    message.channel.send(embed2);
   }
   else if(args[0]=== 'info'){
    const embed3= new Discord.MessageEmbed()
    .setTitle(`<a:nitro_s:790166844799451198>Information Commands`)
    .setDescription(' `help`- Shows you basic help with bots commands with some additional information \n `info`- Opens up a menu to show the Bot latency, API Latency, Uptime and Sponsors that are supporting in the development of the bot!!! \n `invite`- Provides with a link to the user to invite the bot to their Server and Zap it ')
    .setFooter(`zap [command-name]`)
    .setColor(`GREEN`)
    message.channel.send(embed3);
   }
  else {
  const embed = new Discord.MessageEmbed()
  .setAuthor('Tensor Calculus Mistakes#1729, Adonis#5927')
  .setThumbnail(`https://cdn.discordapp.com/attachments/783336944712810506/792128911123283968/monkey.jpg`)
  .setTitle(`Standard Commands`)
  .addField(`<a:Coin:791741559506337832>Economy`, `[\`${client.config.prefix} help economy\`](https://github.com/kshitij-bhardwaj/Zap)`, true)
  .addField(`<a:zoukParrot:787890860518932570>Fun`, `[\`${client.config.prefix} help fun\`](https://github.com/kshitij-bhardwaj/Zap)`, true )
  .addField(`<a:nitro_s:790166844799451198>Information`, `[\`${client.config.prefix} help info\`](https://github.com/kshitij-bhardwaj/Zap)`, true )
  .addField('Zap is a discord bot deemed to help discord users have fun!', 'We have a [github](https://github.com/kshitij-bhardwaj/Zap) repo which tells you all the commands Zap holds, check it out!!',false)
  .addField('Want to get hold of more commands?', 'Join our support server to get hold of all the awesome commands **only our support server has**!!',false)
  .addField('Want to donate?',' Here is our patreon, we hope to serve you with our best, a little donation ignites us!',false)
  .addField('Donation Perks?',`You get a place in our [\`${client.config.prefix} info\`](https://github.com/kshitij-bhardwaj/Zap) command with an awesome look! \nYou can also submit your original artworks to be added into the [\`${client.config.prefix} gallery\`](https://github.com/kshitij-bhardwaj/Zap) with your Name and Tag!!`,false)
  .setColor(0x00AE86)
  .setTimestamp()
  .setFooter(`${client.config.prefix} help`, 'https://c.tenor.com/K5p4FSa0kUgAAAAj/help-northury.gif');
  message.channel.send(embed); 
 }
      
} */