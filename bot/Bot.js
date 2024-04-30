const Telegraf = require('telegraf');

class Bot {
    constructor(token, channelId) {
        this.bot = new Telegraf(token);
        this.channel = channelId;
    }

    send(message) {
        this.bot.telegram.sendMessage(this.channel, message, { parse_mode: 'HTML' });
    }

    sendWithPhoto(photo, message) {
        this.bot.telegram.sendPhoto(this.channel, photo, message, { parse_mode: 'HTML' });
    }
}

module.exports = Bot;