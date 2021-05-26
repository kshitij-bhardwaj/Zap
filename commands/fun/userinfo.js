const Discord = require("discord.js");

module.exports.run =async (client, message, args) => {
    let inline = true
    let presence = true
    const status = {
        online: "<:online:787894866566709269> Online",
        idle: "<:Idle:787895624921776188> Idle",
        dnd: "<:do_not_disturb:787895078907150378> Do Not Disturb",
        offline: "<:offline:787895346340036608> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:BOT:787894138099073105> Yes";
  } else {
    bot = "<:user:424958082691629057> No";
  }

            let embed = new Discord.MessageEmbed()
                .setThumbnail((target.displayAvatarURL))
                .setColor("#00ff00")
                .addField("Full Username", `${member.user.tag}`, inline)
                .addField("ID", member.user.id, inline)
                .addField("Nickname", `${member.nickname !== null ? `<:verified_blue:793398854493274113> Nickname: ${member.nickname}` : "<:no:791297454552252465> None"}`, true)
                .addField("Bot", `${bot}`,inline, true)
                .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                .addField("Playing", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<:no:791297454552252465> Not playing"}`,inline, true)
                .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:791297454552252465> No Roles"}`, true)
                .addField("Joined Discord At", member.user.createdAt)
                .setFooter(`Information about ${member.user.username}`)
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }