const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  let blUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!blUser) return message.channel.send("Can't find user!");
  message.channel.sendMessage({
         "embed": {
                 title: 'You have been bitchslapped.',
                 "image": {
                 "url": "https://media.giphy.com/media/QlkiPtWYWRtgQ/source.gif",
                 }
             }
         });

}
module.exports.help = {
  name: ">bitchslap"
}
