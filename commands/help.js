const Discord = require('discord.js');
exports.run = (client, message, args) => {
const help = new Discord.RichEmbed()
.setAuthor("Command Prefix - ch!", client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.addField("Moderator Commands", "ban - Ban a member, optional time limit\nsoftban - Softban a member (ban and immediate unban)\nkick - Kick a member\nmute - Mute a member, optional time limit\npurge - Delete a number of messages from a channel. (limit 100)\nnick - Change the bot nickname\naddrole - Add a new role, with optional color\ndelrole - Delete a role")
.addField("Fun Commands", "ship - Check your relationship with another person\npsychopass - Check someone's crime coefficient\nascii - Turn your input into ascii text")
.addField("Misc Commands", "serverinfo - Show information about a guild\nwhois - Show information about a user\nbotinfo - Show information about Chromatic\nping - Pong")
.setFooter("Requested by " + message.author.username, message.author.avatarURL)
.setTimestamp()
.setColor(0x070707)

message.channel.send(help)
};
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'help',
  description: 'Show information about a guild.',
  usage: 'ban [user]'
};
