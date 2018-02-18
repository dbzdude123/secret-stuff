const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let puser = message.author
  message.channel.send({embed: {
  color: 669933,
  description: `${puser} ` + 'your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`'
}});
}
module.exports.help = {
  name: ">ping"
}
