const YoutubeDL = require('youtube-dl');
const ytdl = require('ytdl-core');
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const music = require('discord.js-music-v11');
const fs = require("fs");
const mysql = require("mysql");
const bot = new Discord.Client();
bot.commands = new Discord.Collection()

module.exports.run = async (bot, message, args) => {
  music(bot, {
  	prefix: '>>',
  	global: false,
  	maxQueueSize: 20,
  	clearInvoker: true,
      channel: 'Music'
  });

}

module.exports.help = {
  name: ">play"
}
