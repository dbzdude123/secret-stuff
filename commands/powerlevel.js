const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let plUser = message.author
  message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,
  description: `${plUser} ` + 'your power level is `' + `${Math.random() * 9677721412) * 2}`
}});

}
module.exports.help = {
  name: ">ping"
}
