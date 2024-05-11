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
    }

    sendToChanel() {
        this.bot.telegram.sendMessage(this.channel, 'test', { parse_mode: 'HTML' });
    }

    sendWithPhoto(photo, message) {
        this.bot.telegram.sendPhoto(this.channel, photo, message, { parse_mode: 'HTML' });
    }

    sendGlobal(message, users) {
        this.bot.telegram.sendMessage(this.channel, message, { parse_mode: 'HTML' });

        users.forEach((user) => {
            try {
                this.bot.telegram.sendMessage(user, message, { parse_mode: 'HTML' });
            } catch (error) {
                console.log(error);
            }
        })
    }
}

module.exports = Bot;