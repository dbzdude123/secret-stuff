const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  message.channel.sendMessage({
         "embed": {
                 title: `${bUser}, ${message.author} has given you a blunt.`,
                 "image": {
                 "url": "https://c2.staticflickr.com/4/3217/2673780960_a1d306aa48_o.png",
                 }
             }
         });
}
module.exports.help = {
  name: ">giveblunt"
}
