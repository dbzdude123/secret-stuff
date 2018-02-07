const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can't purge!");
  message.channel.fetchMessages({limit: args[0]}).then(messages => message.channel.bulkDelete(messages));
  message.delete();
}
module.exports.help = {
  name: "purge"
}
