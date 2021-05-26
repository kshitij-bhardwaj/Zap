const Discord = require('discord.js');
const got = require('got');

module.exports={
	aliases: ['whs'],
	async run(client, message, args) {  
	const embed = new Discord.MessageEmbed();
	got('https://www.reddit.com/r/wholesomememes/random/.json')
		.then(response => {
			const [list] = JSON.parse(response.body);
			const [post] = list.data.children;

			const permalink = post.data.permalink;
			const memeUrl = `https://reddit.com${permalink}`;
			const memeImage = post.data.url;
			const memeTitle = post.data.title;
			const memeUpvotes = post.data.ups;
			const memeNumComments = post.data.num_comments;

			embed.setTitle(`${memeTitle}`);
			embed.setURL(`${memeUrl}`);
			embed.setColor('RANDOM');
			embed.setImage(memeImage);
			embed.addField('Stats',`<:ThumbsupNitronix:792415417485754388> ${memeUpvotes} <:SpeechBubble:792414071017177142> ${memeNumComments}`,false);

			message.channel.send(embed);
		})
		.catch(console.error);
	}
};
