require('dotenv').config();
const { Client, MessageAttachment, DataResolver } = require('discord.js');
const client = new Client();
const { identify } = require('./config.json');

client.on('ready', () => {
	console.log(`Logged in a ${client.user.tag}`);
	client.user.setActivity('a ser humano');
});

client.off('off', () => {
	console.log('Bot in off :(');
});

client.on('message', (msg) => {
	//pingJs
	if (msg.content === `${identify}ping`) {
		msg.reply('pong');
	}
	//whatAvatarJs
	if (msg.content.toLowerCase().startsWith(`${identify}whatavatar`)) {
		const userMentions = msg.mentions.users.first();
		if (userMentions) {
			msg.channel.send(userMentions.displayAvatarURL());
			msg.reply(`avatar of: ${userMentions}`);
		} else {
			msg.channel.send(`${msg.author.displayAvatarURL()}`);
			msg.reply('we did not find any mention, we print your avatar :< ');
		}
	}
	//fanArtJs
	if (msg.content.toLowerCase() === `${identify}fanart`) {
		const attachment = new MessageAttachment(
			'/home/save/Downloads/michal-kvac-mushroom-forest-small.jpg'
			//'https://i.pinimg.com/originals/12/ac/eb/12acebfd4187d23ae7acff27198a2f9b.jpg'
		);
		msg.channel.send(attachment);
	}
	//putearFRani
	if (msg.content.toLowerCase() === `${identify}putearfrani`) {
		const attachment = new MessageAttachment(
			'https://cdn.discordapp.com/attachments/805228943136784407/847665547696537640/d130fc114b1982de257c533d38c680c66a388c45d2da581862d13620e226555b.png'
			//'https://i.pinimg.com/originals/12/ac/eb/12acebfd4187d23ae7acff27198a2f9b.jpg'
		);
		msg.channel.send(attachment);
	}
	if (msg.content === `${identify}clasico`) {
		const attachMessage = new MessageAttachment(
			'https://media.discordapp.net/attachments/805228943136784407/852376199916814376/imagen_2021-06-09_213159.png?width=221&height=221'
		);
		msg.channel.send(attachMessage);
	}
	if (msg.content === `${identify}pisame`) {
		const attachMessage = new MessageAttachment('/home/save/Downloads/pisame.jpg');
		msg.channel.send(attachMessage);
	}
	//violentos
	if (msg.content.toLowerCase() === `${identify}estoyviolento`) {
		const attachment = new MessageAttachment(
			'/home/save/Downloads/violento.ogg'
			//'https://i.pinimg.com/originals/12/ac/eb/12acebfd4187d23ae7acff27198a2f9b.jpg'
		);
		msg.channel.send(attachment);
	}
	//helloJs
	if (msg.content.startsWith(`${identify}hello`)) {
		const userMentions = msg.mentions.users.first();
		if (userMentions) {
			msg.channel.send(`hello ${userMentions}`);
		} else {
			msg.channel.send(`hello ${msg.author}`);
		}
	}
	//statusJs

	//clearMessageJs
	if (msg.content === `${identify}clearMessage`) {
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
	}
});

client.login(process.env.BOTTOKEN);
