
const Discord = require('discord.js')
const db = require('quick.db');
const serverstats = new db.table('ServerStats');

exports.run = async (client, message, args, tools) => {
let x, y, z, cateid;
if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`<a:no:790889592395792404> You need **MANAGE_GUILD** permission to use this command.`)
if (!args[0]) return message.channel.send("<a:no:790889592395792404> Invalid parameters. Correct usage: `zap serverstats enable` | `zap serverstats disable`.");  
if(args[0] === 'enable') {
  const guild = message.guild.id;
  
  if(!message.guild.me.hasPermission(`MANAGE_CHANNELS`)) return message.channel.send(`<a:no:790889592395792404> I don't have **MANAGE_CHANNELS** permission.`);
  const channelize = message.guild.channels.cache.find(c => c.name === '📈Server Statistics📈');
  if(channelize != null) return message.channel.send(`<a:no:790889592395792404> Server stats are already enabled for this server.`)
  message.guild.channels.create('📈Server Statistics📈', {
    type: 'category',
    permissionOverwrites: [
    {
      id: message.guild.id,
    },],}).then(c1 => {
  c1.setPosition(0)
  cateid=c1.id;
  message.guild.channels.create("Total Users : " ,  {
    type: 'voice',
    permissionOverwrites: [
  {
    id: message.guild.id,
    deny: ['CONNECT']
  },],}).then(async channel1 => {
  channel1.setParent(c1.id).then
  x = channel1.id
  message.guild.channels.create("Human Users  : " , {
type: 'voice',
permissionOverwrites: [
  {
  id: message.guild.id,
  deny: ['CONNECT']
  },],}).then(async channel2 => {
channel2.setParent(c1.id)
y = channel2.id
message.guild.channels.create("Bot Users : " , {
type: 'voice',
permissionOverwrites: [
  {
  id: message.guild.id,
  deny: ['CONNECT']
  },],}).then(async channel3 => {
channel3.setParent(c1.id)
z = channel3.id
 
}).catch(console.error)
}).catch(console.error)
}).catch(console.error)
}).catch(console.error)
setInterval(() =>{
  const memberCount = guild.memberCount;
  const userCount = guild.members.cache.filter(m => !m.user.bot).size;
  const botCount = guild.members.cache.filter(m => m.user.bot).size;
  client.channels.cache.get(x).setName(`Total Users : ${memberCount.toLocaleString()}`);
  client.channels.cache.get(y).setName(`Total Users : ${userCount.toLocaleString()}`);
  client.channels.cache.get(z).setName(`Total Users : ${botCount.toLocaleString()}`);
  console.log('Updating Member Count');
}, 5000);
  
message.channel.send(`<a:My_best_verified:790894580643397653> Serverstats enabled for this server.`)
} 
else if (args[0] === 'disable') {
  const channelaze = message.guild.channels.cache.find(c0 => c0.name === '📈Server Statistics📈');
  if(channelaze === null) return message.channel.send(`<a:no:790889592395792404> Serverstats for this server is not enabled.`)
  client.channels.cache.get(x).delete()
  client.channels.cache.get(y).delete()
  client.channels.cache.get(z).delete()
  client.channels.cache.get(cateid).delete()
  
message.channel.send(`<a:My_best_verified:790894580643397653> Serverstats disabled for this server.`) 
}
}
