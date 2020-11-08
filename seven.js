const rich = require("discord-rpc");
const rpc = new rich.Client({ transport: "ipc" });
const startTimestamp = new Date();

const clientId = "692341410820653076";
	
rpc.on('ready', () => {
	try {
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
	} catch (e) {
		return console.error(e)
	}
});

rpc.login({ clientId }).then(() => console.log("Connecté")).catch(console.error);
