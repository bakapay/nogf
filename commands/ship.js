const Discord = require('discord.js');
exports.run = function(client, message, args) {
let xemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticX")
let vemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticV")
    let user = message.mentions.users.first();
	const rating = Math.floor((Math.random() * 100));
const k = new Discord.RichEmbed()
.setAuthor("Command: ch!ship", client.user.avatarURL)
.setDescription("**Description:** Check your relationship with another person\n**Usage:** ch!ship [user]\n**Example:** ch!ship <@411906087906705408>")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)
if (message.mentions.users.size < 1) return message.channel.send(k)	

if(user.id === message.author.id) return message.channel.send(xemoji + " You must mention another person, baka!")
if(rating < 25) return message.channel.send("**" + message.author.username + "** :heart: **" + user.username + "** **|** **" + rating + "%** - Meh :cold_sweat:")
if(rating < 60) return message.channel.send("**" + message.author.username + "** :heart: **" + user.username + "** **|** **" + rating + "%** - Great :smile:")
if(rating > 80) return message.channel.send("**" + message.author.username + "** :heart: **" + user.username + "** **|** **" + rating + "%** - Amazing :heart_eyes:")
if(rating === 100) return message.channel.send("**" + message.author.username + "** :heart: **" + user.username + "** **|** **" + rating + "%** - PERFECT :heart_exclamation:")	
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'ship',
  description: "Check someone's crime coefficient.",
  usage: 'ban [user]'
};
