const db= require(`quick.db`);
module.exports = async(client, member) => {
        const guild = member.guild;
        let leaveStatus = db.fetch(`goodbye_${guild.id}`);
        if(leaveStatus === true){
            const cmd = client.commands.get("memberLeave");
            if(!cmd) return;
            cmd.run(client, member);
        }
        else return;
        
    
}