const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!kUser) return message.channel.send("Can't find user!");
if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You don't have enough permissions.");
if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

message.guild.member(kUser).kick();
message.channel.send(`${kUser} has been kicked by <@${message.author.id}>`)
return;
}

module.exports.help = {
  name: "kick"
}
