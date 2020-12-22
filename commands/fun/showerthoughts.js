
const Discord = require('discord.js');
const got = require('got');

module.exports.run = async (bot, message, args) => {
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/showerthoughts/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.addField('Stats',`<a:thumbsupParrot:790510205502619678> ${memeUpvotes} <a:speech_bubble_heart:790510910266671114> ${memeNumComments}`,false);

			message.channel.send(embed);
		})
		.catch(console.error);
};

exports.help = {
    type: "fun",
    name: "showerthoughts",
    description: "Generates a random thought from r/showerthoughts",
    usage: "zap showerthoughts",
}
