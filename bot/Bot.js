const { Telegraf } = require('telegraf');
const MessageHandler = require('./MessageHandler');

class Bot {
    constructor(token, channelId) {
        this.bot = new Telegraf(token);
        this.channel = channelId;

        this.messageHandler = new MessageHandler(this.bot)

        this.bot.on('message', (ctx) => {
            this.messageHandler.handle(ctx);
        });

        this.bot.launch();
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

    telegram(callback) {
        return this.bot
    }

    async sendToChatID(telegramChatID, message) {
        this.bot.telegram.sendMessage(telegramChatID, message, { parse_mode: 'HTML' });
    }
}

module.exports = Bot;