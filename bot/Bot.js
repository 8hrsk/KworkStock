const { Telegraf } = require('telegraf');

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

class Bot {
    constructor(token, channelId) {
        this.bot = new Telegraf(token);
        this.channel = channelId;
    }

    async send(message) {
        this.bot.telegram.sendMessage(this.channel, message, { parse_mode: 'HTML' });
        await sleep(1000);
    }

    sendToChanel() {
        this.bot.telegram.sendMessage(this.channel, 'test', { parse_mode: 'HTML' });
    }

    sendWithPhoto(photo, message) {
        this.bot.telegram.sendPhoto(this.channel, photo, message, { parse_mode: 'HTML' });
    }
}

module.exports = Bot;