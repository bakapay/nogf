const Discord = require('discord.js');
exports.run = function(client, message, args) {
let xemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticX")
let vemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticV")
	message.channel.send(":clock12: Pinging...").then(m =>
    setTimeout(() => {
        m.edit(vemoji + " **PONG!**: " + `${m.createdTimestamp - message.createdTimestamp}ms`)
    }, 1000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: "Check someone's crime coefficient.",
  usage: 'ban [user]'
};