const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
var value1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
var value2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
var value3 = [300, 341, 495, 400, 519, 500, 590, 600, 640, 631, 639, 682, 700, 751, 910, 800, 853, 914, 918, 950, 1000, 1500, 3000, 4000, 8000, 900, 30000, 40000];
message.reply(`your powerlevel is ` + ((value1[Math.floor(Math.random() * fortunejar.length)]) * (value2[Math.floor(Math.random() * fortunejar.length)]) * (value3[Math.floor(Math.random() * fortunejar.length)]));
}
module.exports.help = {
  name: ">powerlevel"
}
