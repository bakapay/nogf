const Discord = require('discord.js');
exports.run = (client, message, args) => {
const bhelp = new Discord.RichEmbed()
.setAuthor(client.user.tag, client.user.avatarURL)
.addField('**Memory used:**', (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + 'MB', true) 
.addField('**Users:**', client.users.size, true)
.addField('**Servers:**', client.guilds.size, true)  
.addField('**Channels:**', client.channels.size, true)
.addField('**Library:**', 'Discord.js v' + require('discord.js').version, true) 
.addField('**Developer:**', '.payyy#7704', true)  
    .setTimestamp()
	.setThumbnail(client.user.avatarURL)
    .setColor(0x070707)
	
     message.channel.sendEmbed(bhelp)
	 };
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 0
};

exports.help = {
  name: 'botinfo',
  description: 'Show information about a guild.',
  usage: 'ban [user]'
}; 
