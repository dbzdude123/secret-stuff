const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  message.reply('your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`');
}
module.exports.help = {
  name: ">ping"
}
