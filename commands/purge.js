const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("you can't purge!");
  message.channel.fetchMessages({limit: args[0]}).then(messages => message.channel.bulkDelete(messages));
}
module.exports.help = {
  name: ">purge"
}
