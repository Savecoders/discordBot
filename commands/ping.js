const ping = (msg) => {
	msg.reply('Pong!!!!!!!!!!');
	console.log('se ejecuta ping');
};

module.exports = {
	ping: ping,
};
