const db = require(`quick.db`);
const Discord = require(`discord.js`);
module.exports = {
    run(client,message, args){
        if(db.fetch(message.author.id + '.afk')=== true) return;
        let nickname = message.member.displayName;
        if (!message.member.hasPermission('ADMINISTRATOR')){
        if(nickname.substring(0,5) !== '[AFK]'){
            if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
            nickname = `[AFK]`+nickname;
            message.member.setNickname(nickname);
          }
        }
    
    const reason = args.join(' ');
    message.channel.send({embed: {color: `GREEN`, title:`${message.author.tag}`, description: 'You have been set as an AFK user.\nReason:\n'+ reason+ '\nI will inform the people who mention you!'}})
// then here you use the database :
db.set(message.author.id + '.afk', true)
db.set(message.author.id + '.messageafk', reason);
    }
}