const db= require(`quick.db`);
module.exports = (client, member) => {
	const guild = member.guild;
	let welcomeStatus = db.fetch(`welcomer_${guild.id}`);
    if(welcomeStatus === true){
		const cmd = client.commands.get("memberWelcome");
		if(!cmd) return;
		cmd.run(client, member);
	}
	else return;
	
}
    