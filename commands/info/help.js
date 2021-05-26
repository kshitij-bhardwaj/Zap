const { MessageEmbed } = require("discord.js");
const { Menu } = require("discord.js-menu");


module.exports.run = (client, message, args) => {
  
  
  const text = args.join(' ');
  
  if(!text){
  const helpembed = new MessageEmbed()
  .setTitle('**Command Modules**')
  .setDescription('To know all the uses of commands click [here](https://zapbot.gitbook.io/commands/)')
  .addField(':moneybag: Economy Commands',`[\`zap help economy\`](https://zapbot.gitbook.io/commands/economy-commands)`, true)
  .addField(':tools: Utility Commands',`[\`zap help utility\`](https://zapbot.gitbook.io/commands/utility-commands)`, true)
  .addField(':musical_note: Music Commands',`[\`zap help music\`](https://zapbot.gitbook.io/commands/music)`,true)
  .addField(':star2: Misc Commands',`[\`zap help misc\`](https://zapbot.gitbook.io/commands/fun-commands)`, true)
  .addField(':gift_heart: Fun Commands',`[\`zap help fun\`](https://zapbot.gitbook.io/commands/fun-commands)`, true)
  .addField(':camera:  Image Commands',`[\`zap help image\`](https://zapbot.gitbook.io/commands/fun-commands)`, true)
  .setColor('#ff9900');
  
  message.channel.send(helpembed);
  }
  
  if(text === 'economy'){
  const ecoembed = new MessageEmbed()
  .setTitle(':moneybag: **Economy Module**')
  .setDescription('\`balance\` \`beg\` \`buy\` \`daily\` \`weekly\` \`monthly\` \`pay\` \`profile\` \`removemoney\` \`rob\` \`roulette\` \`slots \` \`store\` \`deposit \` \`withdraw\` \`work\`')
  .setFooter('Before a command type zap. ex- zap beg')
  .setColor('#ff9900');
  message.channel.send(ecoembed);
  
  }if(text === 'fun'){
  const funembed = new MessageEmbed()
  .setTitle(':gift_heart: **Fun Module**')
  .setDescription('\`akistart\` \`8ball \` \`slap\` \`hug\` \`poke\` \`randomcat\` \`randomdog\` \`hangman\`')
  .setFooter('Before a command type zap. ex- zap hangman')
  .setColor('#ff9900');
    
  message.channel.send(funembed);

  
  }
  if(text === 'misc'){
  const miscembed = new MessageEmbed()
  .setTitle(':star2: **Miscellaneous Module**')
  .setDescription('\`dank\` \`gallery\` \`meme\` \`4chan\` \`wiki\` \`weather\`  \`wholesome\` \`foodporn\` \`showerthoughts\` \`antijoke\` \`movie\`')
  .setFooter('Before a command type zap. ex- zap meme')
  .setColor('#ff9900');
    message.channel.send(miscembed);
  }
  if(text === 'music'){
  const musicembed = new MessageEmbed()
  .setTitle(':musical_note: **Music Module**')
  .setDescription('\`play\` \`skip\` \`volume\` \`queue\` \`nowplay\` \`pause\` \`resume\`  \`leave\`')
  .setFooter('Before a command type zap. ex- zap play')
  .setColor('#ff9900');
    message.channel.send(musicembed);
  }
  if(text === 'utility'){
  const utilembed = new MessageEmbed()
  .setTitle(':tools: **Utility Module**')
  .setDescription('\`info\` \`invite\` \`help\` \`automod\` \`welcomer\` \`goodbye\` \`poll\` \`afk\`')
  .setFooter('Before a command type zap. ex- zap automod enable')
  .setColor('#ff9900');
    message.channel.send(utilembed);
  }
  if(text === 'image'){
    const imageembed = new MessageEmbed()
    .setTitle(':camera: **Image Module**')
    .setDescription(' \`alwayshasbeen\` \`ban\` \`deepfry\` \`dudewtf\` \`fireman\` \`imposter\` \`kickoffthecliff\` \`location\` \`news\` \`ppap\` \`reasontolive\` \`shit\` \`shoot\` \`smack\` \`texting\` \`trumptweet\` \`yobabes\` ')
    .setFooter('Before a command type zap. ex- zap fire Hell Yeah!')
    .setColor('#ff9900');
      message.channel.send(imageembed);
    }
  }

      

  