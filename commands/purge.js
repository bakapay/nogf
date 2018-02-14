const Discord = require('discord.js');
exports.run = function(client, message, args) {
let xemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticX")
let vemoji = client.guilds.get("411904047797239820").emojis.find("name", "chromaticV")
const k = new Discord.RichEmbed()
.setAuthor("Command: ch!purge", client.user.avatarURL)
.setDescription("**Description:** Delete a number of messages from a channel. (limit 100)\n**Usage:** ch!purge [count]\n**Example:** ch!purge 53")
.setFooter("Requested by " + message.author.username)
.setColor(0x070707)

    const deleteCount = parseInt(args[0], 10); 
 if (!message.guild.member(message.author.id).hasPermission("MANAGE_MESSAGES")) return message.channel.send(xemoji + " You don't have the correct permission.") 
  if(!deleteCount || deleteCount < 2 || deleteCount > 100) return message.channel.send(k)
  message.delete() 
message.channel.fetchMessages({
  }).then(messages => message.channel.bulkDelete(deleteCount))
	message.channel.send(vemoji + " Deleting " + deleteCount + " messages.").then(	
	setTimeout(() => {
	message.channel.bulkDelete(client.user.id)
        }, 500))

  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Delete some messages from a guild.',
  usage: 'purge <number>'
};