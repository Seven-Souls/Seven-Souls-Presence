const rich = require("discord-rpc");
const rpc = new rich.Client({ transport: "ipc" });
const startTimestamp = new Date();

const clientId = "692341410820653076";

rpc.on('ready', () => {
	try {
		rpc.setActivity({
			details: "Bot Polyvalent",
			state: "Prévention Anti-Raid",
			startTimestamp,
			largeImageKey: "seven_large",
			largeImageText: "Rejoignez-nous dès maintenant !",
			smallImageKey: "seven",
			smallImageText: "L'efficacité, notre priorité !",
			buttons: [
				{ label: "Le bot officiel", url: "https://discord.com/api/oauth2/authorize?client_id=528258150500007947&permissions=-1&scope=bot" },
				{ label: "Serveur de support", url: "https://discord.gg/UZXKbgN" }
			],
			instance: false
		});
	} catch (e) {
		return console.error(e);
	}
});

rpc.login({ clientId }).then(() => console.log("Connecté")).catch(console.error);
