const si = require('systeminformation');
const { MessageEmbed} = require(`discord.js`);
module.exports = {
    run: async(client, message, info) => {
        
        try{
        const data = si.cpu();
        const data2 = si.system();
        const data3 = si.time();
        const data4= si.mem();
        const data5 = si.cpuCurrentspeed();
        const data6 = si.osInfo();
        console.log(client.commands.size);
        const embed = new MessageEmbed()
                        .addField(`System Manufacturer:`, `${(await data2).manufacturer}`, true)
                        .addField(`System Model:`, `${(await data2).model}`, true)
                        .addField(`System Version:`, `${(await data2).version}`, true)
                        .addField(`CPU Brand:`, `${(await data).brand}`, true)
                        .addField(`CPU Manufacturer:`, `${(await data).manufacturer}`, true)
                        .addField(`Average Speed:`, `${(await data5).avg} GHz`, true)
                        .addField(`CPU Cores:`, `${(await data).cores}`, true)
                        .addField(`Processors`, `${(await data).processors}`, true)
                        .addField(`Processor Model:`, `${(await data).model}`, true)
                        .addField(`Total Memory:`, `${(await data4).total} bytes`, true)
                        .addField(`Free Memory`, `${(await data4).free} bytes`, true)
                        .addField(`Active Memory`, `${(await data4).active}`, true)
                        .addField(`OS Platform:`, `${(await data6).platform}`, true)
                        .addField(`Uptime:`, `${data3.uptime} seconds`, true )
                        .addField(`Commands:`, `${client.commands.size}`, true)
                        .setColor(`GREEN`);
                        message.channel.send(embed);
        }catch(err){
            message.channel.send(`Cannot display the information. ${err}`)
        }
        
    }
}
