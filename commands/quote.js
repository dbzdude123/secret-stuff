const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.roles.find("name", "staff")) return message.reply("you can't use quote command.");
  message.channel.send(args.join(" "));
  message.delete();
}
module.exports.help = {
  name: ">quote"
}
