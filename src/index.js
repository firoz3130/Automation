import dotenv from "dotenv";
import ytdl from "ytdl-core";
import { addAttendance, getTeamList } from "./sheets.js";
import { client } from "./discord1.js";

dotenv.config();

client.login(process.env.TOKEN);

const teamsheet = (await getTeamList()).data.values;

client.on("ready", () => {
	client.guilds.fetch("1032308107625365504").then((guild) => {
		const members = Array.from(guild.members.cache.values());
		const roleIndex = teamsheet[0].indexOf("Role");
		const memberNameIndex = teamsheet[0].indexOf("Member Name");
		const teamIndex = teamsheet[0].indexOf("Team");
		const duTagIndex = teamsheet[0].indexOf("Discord User Tag");

		const teamDiscordRoleMap = {
			Creative: "1032670385067536475",
			Sponsorship: "1032672798960795799",
			["Event Management"]: "1032672634057539634",
			Curation: "1032672488280305737",
			["Social Media"]: "1035595520812523550",
		};

		teamsheet.slice(1).forEach((v, i) => {
			const member = members.find(
				(member) => member.user.tag == v[duTagIndex]
			);
			if (!member) {
				console.log(v[duTagIndex]);
				return;
			}
			member
				.setNickname(v[memberNameIndex])
				.then(() => {
					console.log(member.displayName);
// 					const roleNames = member.roles.cache.map(role => role.name);
// console.log(roleNames);

				})
				.catch((e) => {
					console.log(e);
					console.log(member.user.tag);
				});
// 				if (v[roleIndex] == "Core member" || v[roleIndex] == "Volunteer") {
// 					const roleId = "1032322997194854400";
// 					const role = member.guild.roles.cache.get(roleId);
// 					if (!role) 
// 							return console.log("Role not found");
// 					member.roles.remove(role).then(() => {
//     				console.log(
//        				member.displayName,
//         			Array.from(member.roles.cache.values()).map(v => v.name)
//     );
// });
// 					member.roles.remove(Object.values(teamDiscordRoleMap)).then(()=>{
// 					    console.log(
// 					        member.displayName,
// 					        Array.from(member.roles.cache.values()).map((v) => v.name)
// 					    );
// 					});
// 				}
// if (v[roleIndex] == "Core member" ) {
// 	console.log(
// 		member.displayName,
// 		Array.from(member.roles.cache.values()).map((v) => [
// 			v.name,
// 			v.id,
// 		])
// 	);
// 	member.roles
// 		.add([
// 			"1032322997194854400",
// 			...v[teamIndex]
// 				.split("/")
// 				.map((x) => teamDiscordRoleMap[x]),
// 		])
// 		.then(() => {
// 			console.log(
// 				member.displayName,
// 				Array.from(member.roles.cache.values()).map(
// 					(v) => v.name
// 				)
// 			);
// 		})
// 		.catch(() => {
// 			console.log(
// 				v[teamIndex]
// 					.split("/")
// 					.map((x) => teamDiscordRoleMap[x])
// 			);
// 		});

// 	// member.roles.remove(Object.values(teamDiscordRoleMap)).then(()=>{
// 	//     console.log(
// 	//         member.displayName,
// 	//         Array.from(member.roles.cache.values()).map((v) => v.name)
// 	//     );
// 	// });
// }
// if (v[roleIndex] == "Volunteer") {
// 	console.log(
// 		member.displayName,
// 		Array.from(member.roles.cache.values()).map((v) => [
// 			v.name,
// 			v.id,
// 		])
// 	);
// 	member.roles
// 		.add([
// 			"1079974680288575488",
// 			...v[teamIndex]
// 				.split("/")
// 				.map((x) => teamDiscordRoleMap[x]),
// 		])
// 		.then(() => {
// 			console.log(
// 				member.displayName,
// 				Array.from(member.roles.cache.values()).map(
// 					(v) => v.name
// 				)
// 			);
// 		})
// 		.catch(() => {
// 			console.log(
// 				v[teamIndex]
// 					.split("/")
// 					.map((x) => teamDiscordRoleMap[x])
// 			);
// 		});

// 	// member.roles.remove(Object.values(teamDiscordRoleMap)).then(()=>{
// 	//     console.log(
// 	//         member.displayName,
// 	//         Array.from(member.roles.cache.values()).map((v) => v.name)
// 	//     );
// 	// });
// }
		});
	});
});
/*

*/
  //attendance
  function addJoinAttendance(username, time) {
	console.log(`${username} joined at ${time}`);
	//addAttendance(username,time);
}
function addLeaveAttendance(username, time) {
	console.log(`${username} left at ${time}`);
}
  client.on("voiceStateUpdate", (oldState, newState) => {
	console.log("newState.channelID: ", newState.channel ? newState.channel.id : "Not in a voice channel");
	console.log("oldState.channelID: ", oldState.channel ? oldState.channel.id : "Not in a voice channel");
  
	// check if the user joined the specific voice channel
	if (newState.channel && !oldState.channel) {
		const joinTime = new Date();
		console.log("Join time is " + joinTime.toLocaleTimeString());		
	  console.log("Username is " + newState.member.user.username);
	  addJoinAttendance(newState.member.user.username, joinTime);
	}
	// check if the user left the specific voice channel
	if (oldState.channel && !newState.channel) {
		const leaveTime = new Date();
		console.log("Leave time is " + leaveTime.toLocaleTimeString());
		addLeaveAttendance(oldState.member.user.username, leaveTime.toLocaleTimeString());
	  }
	  
  });
  
					
  
					