const Parser = require('./parser/ParserV4');
const MessageConstructor = require('./bot/MessageConstructor');

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

class Interface {
    constructor(links) {
        this.links = links;
        this.parser = new Parser();
        this.messageConstructor = MessageConstructor;
        this.data = [];
        this.messages = [];
    }

    async start(callback) {
        for (const link in this.links) {
            this.parser.parserGet(this.links[link], (data) => {
                this.data.push(data);
            })
        }

        while (this.data.length < 7) {
            await sleep(500)
        }

        this.constructMessages();

        while (this.messages.length < 7) {
            await sleep(500)
        }

        callback(this.messages)
    }

    constructMessages() {
        this.data.forEach((item) => {
            let category = [...item.categoryName];
            let Category = ''
            for (let i = 0; i <= category.length; i++) {
                if (category[i] === ' ') {
                    category[i] = '_';
                }

                if (category[i] === ',') {
                    category[i] = '';
                }

                if (category[i] === undefined) {
                    continue
                }

                Category += category[i]
            }

            let parentCategory = [...item.parentCategoryName];
            let ParentCategory = ''
            for (let i = 0; i <= parentCategory.length; i++) {
                if (parentCategory[i] === ' ') {
                    parentCategory[i] = '_';
                }

                if (parentCategory[i] === ',') {
                    parentCategory[i] = '';
                }

                if (parentCategory[i] === undefined) {
                    continue
                }

                ParentCategory += parentCategory[i]
            }

            const link = 'https://kwork.ru' + item.url + '/view';

            const message = new this.messageConstructor(
                ParentCategory,
                Category ,
                item.name,
                item.description,
                item.timeLeft,
                link,
                item.kworkCount,
                item.id,
                item.priceLimit,
                item.possiblePriceLimit,
                item.userName
            )

            this.messages.push(message);
        })
    }
}

module.exports = Interface