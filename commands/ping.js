const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.channel.sendMessage('Your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
}
module.exports.help = {
  name: ">ping"
}
