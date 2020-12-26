const { MessageEmbed } = require('discord.js');

module.exports.run = aysnc (message, args) => {
 if (!args.length) {
      return message.send("Command Usage is: `roll < one / two / three / four / five / six >`")
    }


 let argsoutcome = args[0];
      let outcomes = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six'
      ];
        let outcome = outcomes[Math.floor(Math.random() * outcomes.length)];

      let result;
      if (outcome.toLowerCase() === argsoutcome.toLowerCase()) {
        result = 'Congratulations! You won the bet.';
      } else {
        result = 'Sorry, you lost the bet. Better luck next time.';
      }
      const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`Rolled: ${outcome}:`)
        .setDescription(result)
      await message.channel.send({ embed
      }).catch(e => {
        this.client.logger.error(e);
        return message.channel.send(`An error occurred:\n\```${error.message}\````);
      });
    }
}
