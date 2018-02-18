const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let puser = message.guild.member(message.mentions.users.first()
  message.channel.send({embed: {
  color: 3447003,
  description: `${puser} ` + 'your ping is `' + `${Date.now() - message.createdTimestamp}` + ' ms`'
}});
}
module.exports.help = {
  name: ">ping"
}
