const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have enough permissions.");
  if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person cannot be banned!");

  message.guild.member(kUser).ban();
  message.channel.send(`${kUser} has been banned by <@${message.author.id}>.`)
  kUser.sendMessage(`${kUser} you've been banned from ${message.guild.name} by ${message.author}.`);
  return;
}

module.exports.help = {
  name: ">ban"
}
