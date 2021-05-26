
let Discord = require('discord.js');
const resources = require('../../resources.json')
module.exports.run =(client, message) => {
        async function giveaway() {
            var time = '';
            var time2 = '';
            var time3 = '';
            if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You must have atleast administrative permissions to use this command, lol');
            if (message.content.split(' ')[2] === undefined) return message.channel.send('Please enter a duration for the giveaway.');
            const stated_duration_hours = message.content.split(" ")[2];
            const stated_duration_hours2 = stated_duration_hours.toLowerCase();
            if (stated_duration_hours2.includes('s')) {
                var time = 's';
            }
            else if (stated_duration_hours2.includes('m')) {
                var time = 'm';
            }
            else if (stated_duration_hours2.includes('h')) {
                var time = 'h';
            }
            else if (stated_duration_hours2.includes('d')) {
                var time = 'd';
            }
            else var time = 's';
            const stated_duration_hours3 = stated_duration_hours2.replace(time, '');
            if (stated_duration_hours3 === '0') {
                message.channel.send('Yo dude, what?!?');
            }
            if (isNaN(stated_duration_hours3)) {
                message.channel.send('Dude...oof..');
            }
            if (stated_duration_hours3 > 1) {
                var time3 = 's';
            }
            if (time === 's') {
                var actual_duration_hours = stated_duration_hours3 * 1000;
                var time2 = 'second';
            }
            if (time === 'm') {
                var actual_duration_hours = stated_duration_hours3 * 60000;
                var time2 = 'minute';
            }
            if (time === 'h') {
                var actual_duration_hours = stated_duration_hours3 * 3600000;
                var time2 = 'hour';
            }
            if (time === 'd') {
                var actual_duration_hours = stated_duration_hours3 * 86400000;
                var time2 = 'day';
            }
            const prize = message.content.split(' ').slice(3).join(' ');
            console.log(prize);
            if (prize === '') return message.channel.send('You want to give **air** as prize?');
            if (!isNaN(stated_duration_hours3)) {
                if (stated_duration_hours3 !== '0') {
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${prize}`)
                    .setColor(`${resources['embed-fun']}`)
                    .setDescription(`React with ${resources['emoji-giveRes']} to enter!\nTime duration: **${stated_duration_hours3}** ${time2}${time3}\nHosted by: ${message.author}`)
                    .setTimestamp(Date.now() + (actual_duration_hours))
                    .setFooter('Ends at')
                    let msg = await message.channel.send(`🥳 **GIVEAWAY** 🥳`, embed)
                    await msg.react(`${resources['emoji-giveRes']}`)
                    let emojiTag = `${resources['emoji-giveRes']}`.split(":");
                    emojiTag= emojiTag[2].substring(0, emojiTag[2].length-2)
                    if(isNaN(emojiTag)) return console.log('Use an emoji with a valid tag');
                    setTimeout(() => {
                        msg.reactions.cache.get(`${emojiTag}`).remove();
                        setTimeout(() => {
                            let winner = msg.reactions.cache.get().users.cache.random();
                            if (msg.reactions.cache.get(`${emojiTag}`).users.cache.size < 1) {
                                const winner_embed = new Discord.MessageEmbed()
                                .setTitle(`${prize}`)
                                .setColor(`${resources['embed-fun']}`)
                                .setDescription(`Winner:\nNo one entered the giveaway.\nHosted by: ${message.author}`)
                                .setTimestamp()
                                .setFooter('Ended at')
                                msg.edit('🥳 **GIVEAWAY ENDED** 🥳', winner_embed);
                            }
                            if (!msg.reactions.cache.get(`${emojiTag}`).users.cache.size < 1) {
                                const winner_embed = new Discord.MessageEmbed()
                                .setTitle(`${prize}`)
                                .setColor(`${resources['embed-fun']}`)
                                .setDescription(`Winner:\n${winner}\nHosted by: ${message.author}`)
                                .setTimestamp()
                                .setFooter('Ended at')
                                msg.edit('🥳 **GIVEAWAY ENDED** 🥳', winner_embed);
                            }
                        }, 1000);
                    }, actual_duration_hours);
                }
            }
        }
        giveaway();
}
