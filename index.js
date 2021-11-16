require('dotenv').config();
const { Client, MessageAttachment, DataResolver } = require('discord.js');
const client = new Client();

client.on('ready', () => {
	console.log(`Logged in a ${client.user.tag}`);
	client.user.setActivity('a ser humano');
});

client.off('off', () => {
	console.log('Bot in off :(');
});

client.on('message', (msg) => {
	//pingJs

	const defacultCommand = () => {};

	const commands = {
		'!ping': () => {
			msg.reply('TU MADRE');
		},
	};

	const funcCommands = commands[msg.content.split(' ').at(0)] || defacultCommand;

	funcCommands();
	//statusJs

	//clearMessageJs
	/* if (msg.content === `${identify}clearMessage`) {
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
	} */
});

client.login(process.env.BOTTOKEN);
