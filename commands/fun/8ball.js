const Discord = require('discord.js');
const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes, definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.',
  'It does not matter.',
  'Think again.',
  'Connection to the heavens, Lost.'
];
module.exports.run= (client, message, args) => {
    const question = args.join(' ');
    if (!question) return message.channel.send('Please provide a question to ask');
    const embed = new Discord.MessageEmbed()
      .setTitle('🎱  The Magic 8-Ball  🎱')
      .addField('Question',`${question}`, false)
      .addField('Answer', `${answers[Math.floor(Math.random() * answers.length)]}`, false)
      .setFooter(message.author.username,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(`GREEN`);
    message.channel.send(embed);
  };