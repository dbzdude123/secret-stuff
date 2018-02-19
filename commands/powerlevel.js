const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if(message.author.id == "207438736575692800") return message.channel.send(`${message.author}, your power level is infinite (∞).`);
  let plUser = message.author
  let idUser = message.author.id
  message.channel.send({embed: {
  color: Math.floor(Math.random() * 16777214) + 1,
  description: `${plUser} ` + 'your power level is ' + idUser * 2.12145623121412
}});

}
module.exports.help = {
  name: ">powerlevel"
}
