const alexa = require(`alexa-bot-api`);
const ai = new alexa();
const Discord = require(`discord.js`);
module.exports = {
    run: async(client, message, args) => {
        message.channel.startTyping();
        const text = args.join(` `);
        try{
            ai.getReply(text).then(reply => {
                console.log(reply);
                message.channel.send(reply);
            })
        }catch(error){
            message.channel.send(`Lets try again later because ${error.message}`)
        }
        
        message.channel.stopTyping(true);
        }
    }