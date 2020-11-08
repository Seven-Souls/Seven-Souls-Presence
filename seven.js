var rich = require("discord-rpc");
var rpc = new rich.Client({transport:"ipc"});
const startTimestamp = new Date();

var	clientId = "692341410820653076";

async function setActivity() {
rpc.setActivity({
		details: "Team Anti-Raid",
		state: "Bot Multifonction",
		startTimestamp,
		largeImageKey: 'seven_large',
		largeImageText: 'Rejoignez-nous dès maintenant !',
		smallImageKey: 'seven',
		smallImageText: 'Vous ne serez pas déçu !',
		instance: false
	})
}
	
rpc.on('ready', () => {
  setActivity();
  console.log("Connecté");
});

rpc.login({clientId}).catch(console.error);
