const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have enough permissions.");
  if(kUser.hasPermission("BAN_MEMBERS")) return message.channel.send("That person can't be kicked!");

  message.guild.member(kUser).ban();
  message.channel.send(`${kUser} has been banned by <@${message.author.id}>`)
  kUser.sendMessage("You have been banned from DBOR Discord.");
  return;
}

module.exports.help = {
  name: ">ban"
}
