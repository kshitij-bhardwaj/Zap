 const { MessageEmbed } = require('discord.js');
module.exports.run=async(client, message, args) => {
    var emojiList = ['1⃣','2⃣','3⃣','4⃣','5⃣','6⃣','7⃣','8⃣','9⃣','🔟'];
    message.channel.send(`Enter the question. (In one message, not more than 500 characters)`)
    const response = await message.channel.awaitMessages(m => m.author.id === message.author.id,{max: 1});
    const question = response.first().content;
    if (question.length > 500) return message.channel.send(`More than 500 characters. Run the command again.`)
    message.channel.send(`Enter the options separated by \`//\`. (In one message, not more than 1000 characters, not more than 10 optio)`)
    const response1 = await message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1});
    const options = response1.first().content
    if (options.length > 1000) return message.channel.send(`More than 1000 characters. Run the command again.`)
    var optionsList = options.split("//");
    if (optionsList.length > 1000) return message.channel.send(`More than 10 options. Run the command again.`)
    message.channel.send(`Enter the time of the Poll in minutes. Type \`0\` if no time limit.`)
    const response2 = await message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1});
    let time = response2.first().content;
     try{parseInt(time);}catch(error){console.log(error); message.channel.send("Not a valid time input. Run the command again.")}
    time= Math.floor(time);
    if(isNaN(time) === true || time<0) return message.channel.send(`Not a valid time input. Run the command again.`)

    
    var optionsText = "";
    for (var i = 0; i < optionsList.length; i++) { 
        optionsText += emojiList[i] + " " + optionsList[i] + "\n";
    }
    
    var embed = new MessageEmbed()
        .setTitle(question)
        .setDescription(optionsText)
        .setAuthor(message.author.username, message.author.displayAvatarURL)
        .setColor(`GREEN`) // Green: 0x00AE86
        .setTimestamp();
        
    if (time>0) {
        embed.setFooter(`The poll has started and will last ${time} minute(s)`);
    } else {
        embed.setFooter(`The poll has started and has no end time`);
    }

    message.channel.send({embed}) // Definitely use a 2d array here..
        .then(async function (message) {
            var reactionArray = [];
            for (var i = 0; i < optionsList.length; i++) { 
                reactionArray[i] = await message.react(emojiList[i]);
            }
            
            if (time) {
                setTimeout(() => {
                    // Re-fetch the message and get reaction counts
                    message.channel.messages.fetch(message.id)
                        .then(async function (message) {
                            var reactionCountsArray = [];
                            for (var i = 0; i < optionsList.length; i++) {
                                reactionCountsArray[i] = message.reactions.cache.get(emojiList[i]).count-1;
                            }

                            // Find winner(s)
                            var max = -Infinity, indexMax = [];
                            for(var i = 0; i < reactionCountsArray.length; ++i)
                                if(reactionCountsArray[i] > max) max = reactionCountsArray[i], indexMax = [i];
                                else if(reactionCountsArray[i] === max) indexMax.push(i);
                    
                            // Display winner(s)
                            console.log(reactionCountsArray); // Debugging votes
                            var winnersText = "";
                            if (reactionCountsArray[indexMax[0]] == 0) {
                                winnersText = "No one voted!"
                            } else {
                                for (var i = 0; i < indexMax.length; i++) {
                                    winnersText += 
                                        emojiList[indexMax[i]] + " " + optionsList[indexMax[i]] + 
                                        " (" + reactionCountsArray[indexMax[i]] + " vote(s))\n";
                                }
                            }
                            
                            embed.addField("**Winner(s):**", winnersText);
                            embed.setFooter(`The poll is now closed! It lasted ${time} minute(s)`);
                            embed.setTimestamp();
                            
                            message.edit("", embed);
                        });
                }, time * 60 * 1000);
            }
        }).catch(console.error);
            
    return;
}; 