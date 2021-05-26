const Discord = require('discord.js')
const db = require('quick.db')

module.exports= {
  aliases: ['lead', 'lb'],
  async run(client, message, args) {  

      let money = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
      if(money === null) money=0
      const difarr = [];
      client.users.cache.forEach(user => {difarr.push(user);})
      var allmemberlen = difarr.length
      let people = 0;
      let peopleToShow = 20;
      let mes = [];
      for(let i = 0; i < allmemberlen; i++){
        let level = await db.fetch(`level_${message.guild.id}_${difarr[i].id}`)
        if(level === null) level=1;

        if(level===4) rank = '<:Gold:791801979718074378>'
        else if(level===3) rank = '<:Silver:791802074958004234>'
        else if(level===2) rank = '<:Bronze:791801943185948712>'
        else rank = 'Common'
        var xp = await db.fetch(`xp_${message.guild.id}_${difarr[i].id}`);
        if(xp === null) xp=0;
        var amount = db.fetch(`bank_${message.guild.id}_${difarr[i].id}`);
        if(amount === null) continue;
        mes.push({
          name: difarr[i].username,
          amount: amount,
          rank: rank,
          xp: xp
        });
      }
      const realArr= []
      mes.sort((a,b) => b.amount - a.amount);
      mes.sort((c,d) => d.xp - c.xp);
      for(let k=0; k<mes.length; k++){
        people++
        if(people >= peopleToShow) continue;
        realArr.push(`${mes[k].name} ➸ \`Ƶ${mes[k].amount}\` ➸ ${mes[k].rank}`);
      }
      var finallb = realArr.join("\n")


    const embed = new Discord.MessageEmbed()
    .setTitle(`**${message.guild.name}'s Coin Leaderboard**\n\n${finallb}`)
    .setColor(`GREEN`)
    .setTimestamp()
    .setThumbnail('https://media.giphy.com/media/dt92tDMQbv2sCsBKj2/giphy.gif')
    .setFooter(`Image Credits: Re Modernist`)

    message.channel.send(embed)
  }
}