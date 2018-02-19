const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("you don't have enough permissions.");
  if(bUser.hasPermission("BAN_MEMBERS")) return message.reply("that person cannot be banned!");

  message.guild.member(bUser).ban();
  message.channel.send(`${kUser} has been banned by <@${message.author.id}>.`)
  bUser.sendMessage(`${kUser} you've been banned from ${message.guild.name} by ${message.author}.`);
  return;
}

module.exports.help = {
  name: ">ban"
}
