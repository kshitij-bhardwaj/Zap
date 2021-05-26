const { tictactoe, confirmation } = require('reconlx')

module.exports = {
    aliases: ['ttt'],
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
            if(member.user.bot) return message.channel.send(`You can't play with a bot`);
            // Here is an example on using it in banning members.
            message.channel.send(`${member}`,{embed:{color:`GREEN`, description:`Confirmation to play TicTacToe with ${message.author.tag}`}}).then(async msg => {
              // parameters used(which msg to react on, who can acess it, reactions, time(optional))
              const emoji = await confirmation(msg, member, ['✅', '❌'], 30000)
              if(emoji === '✅') { //if author reacts on check
                //delete the confirmation message
                msg.delete()
                //play
                new tictactoe({
                  player_two: member, 
                  message: message
              })
              } 
              if(emoji === '❌') { // if author reacts on cross
              // delete the confirmation message
                msg.delete()
                message.channel.send({embed:{color:`RED`, description:`${message.author.tag}! Your invitation has been rejected`}})
              }
            }).catch(error =>{message.channel.send({embed:{color:`RED`, description: `Time limit to reply has been crossed. No game has been started.`}})})
        
    }
}