const {MessageEmbed}=require ('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessageReactions,        
	],
});
client.on("messageCreate",async (message) => {
	if (message.content == 'days left') {
		const currentDate = new Date();
		const eventDate = new Date('2023-03-31');
	  
		// Calculate the difference in days
		const differenceInTime = eventDate.getTime() - currentDate.getTime();
		const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
	  
		// Create the embed message
		const embedMessage = new MessageEmbed()
		  .setColor('#0099ff')
		  .setTitle('Days Left for Event')
		  .setDescription(`${differenceInDays} days`)
		  .setThumbnail('https://www.shutterstock.com/image-photo/portrait-happy-energetic-businessman-thumbs-260nw-1039973875.jpg')
		  .setFooter('Happy days are coming');
	  
		// Send the embed message to the channel
		message.channel.send({ embeds: [embedMessage] });
	  }
  
});