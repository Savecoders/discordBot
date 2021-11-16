const { Client, MessageAttachment, DataResolver } = require('discord.js');
const client = new Client();
export default clearMessage = (msg) => {
	try {
		if (msg.member.hasPermission('ADMINISTRATOR')) {
			msg.channel.messages.fetch({ limit: 100 }).then((result) => {
				msg.channel.bulkDelete(result);
				setTimeout(() => {
					msg.channel.send('eliminated.....');
				}, 1000);
			});
		} else {
			msg.channel.send('Havent Administrator');
		}
	} catch (e) {
		msg.channel.send('error message');
	}
};
