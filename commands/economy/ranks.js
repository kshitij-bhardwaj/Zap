const db= require("quick.db");


module.exports.run = async(client, message) => {
    let timeout = 120000;
    let xpTimer = await db.fetch(`xpTimer_${message.guild.id}_${message.author.id}`);
    if (xpTimer !== null && timeout - (Date.now() - xpTimer) > 0) return;
    else{
    addXP(message.guild.id, message.author.id);
    updateRank(message.guild.id, message.author.id)
    db.set(`xpTimer_${message.guild.id}_${message.author.id}`, Date.now())
    }
}
const addXP = async (guildID, userID) => {
    //const randomXP= Math.floor(Math.random()* 5)+2;
    const randomXP= Math.floor(Math.random()* 50)+20;
    await db.fetch(`xp_${guildID}_${userID}`);
    await db.add(`xp_${guildID}_${userID}`, randomXP);
    await db.fetch(`valueXP_${guildID}_${userID}`);
    await db.add(`valueXP_${guildID}_${userID}`, randomXP);
}
const updateRank = async (guildID, userID) => {
    
        let xp = await db.fetch(`valueXP_${guildID}_${userID}`);
        let level = await db.fetch(`level_${guildID}_${userID}`)
        if(level === null) level=1;

        if(level===4) rank = '<:Gold:791801979718074378>'
        else if(level===3) rank = '<:Silver:791802074958004234>'
        else if(level===2) rank = '<:Bronze:791801943185948712>'
        else rank = 'Common'

        if(xp >= (level*200)){
            db.add(`level_${guildID}_${userID}`, 1);
            db.set(`valueXP_${guildID}_${userID}`, (xp-(level*200)));
            message.reply(`<@${userID.username} has just level up and reached the ${rank} league!`)
        }

    
}