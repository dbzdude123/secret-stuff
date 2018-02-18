const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let puser = message.author
  message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,
  description: `${puser} ` + 'your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`'
}});
}
module.exports.help = {
  name: ">ping"
}
