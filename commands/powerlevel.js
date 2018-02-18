const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let plUser = message.author
  let idUser = message.author.id
  message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,
  description: `${plUser} ` + 'your power level is ' + idUser * 2.3242
}});

}
module.exports.help = {
  name: ">powerlevel"
}
