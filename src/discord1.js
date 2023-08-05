
import {
	Client,
	GatewayIntentBits
} from "discord.js";

import { google } from 'googleapis';
const youtube = google.youtube({ version: "v3", auth: "AIzaSyAxnwc9L7N0o1gg5IlvOnttkEe5T5T9Ru4" });
export const client = new Client({
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
client.on("ready", () => {
	console.log("The bot is online now");
});
const prefix = '!';
client.on("messageCreate",async (message) => {
	if (message.content == "help me") {
		message.reply("Hey, bud! How can I help you?");
	}
	if(message.content=="stop this")
	{
		message.reply("Can't Stop");
	}
	if (message.content === 'ping') {
		const button = new Discord.ButtonBuilder
		  .setCustomId('ping-button')
		  .setLabel('Ping')
		  .setStyle('PRIMARY');
	
		const row = new Discord.MessageActionRow().addComponents(button);
		
			message.reply({
		  content: 'Pong!',
		  components: [row]
		});
	  }
	if (message.content == "Bot is working") {
		message.reply("Bud,I'm not like you:)\nI always work");
	}
	if (message.content == "Its me Firoz") {
		message.reply("Its me Wazza");
	}
	if (message.content == "ping") {
		message.reply("pong");
	}
	
});
// client.on(Events.InteractionCreate, async (interaction) => {
// 	if (!interaction.isChatInputCommand()) return;

// 	if (interaction.commandName === "button") {
// 		const row = new ActionRowBuilder().addComponents(
// 			new ButtonBuilder()
// 				.setCustomId("primary")
// 				.setLabel("Click me!")
// 				.setStyle(ButtonStyle.Primary)
// 		);

// 		await interaction.reply({
// 			content: "I think you should,",
// 			components: [row],
// 		});
// 	}
// });
// if(msg.content === "!playsong") {
// 	if(!msg.member.voice.channel) {
// 	  return msg.reply("You need to be in a voice channel to play music!");
// 	}
	
// 	const connection = await msg.member.voice.channel.join();
// 	const stream = ytdl("https://www.youtube.com/watch?v=dQw4w9WgXcQ", { filter: 'audioonly' });
// 	const dispatcher = connection.play(stream);
	
// 	dispatcher.on('start', () => {
// 	  console.log('audio is now playing!');
// 	});
	
// 	dispatcher.on('finish', () => {
// 	  console.log('audio has finished playing!');
// 	  msg.member.voice.channel.leave();
// 	});
	
// 	dispatcher.on('error', console.error);
//   }
  