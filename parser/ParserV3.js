const cheerio = require('cheerio');
const axios = require('axios');

class ParserV3 {
    constructor(link, selectors) {
        this.selectors = selectors;

        this.getHtml(link, (result) => {
            this.html = result

            this.getDataFromDom()
        })
    }

    async getHtml(link, callback) {
        axios.get(link)
            .then((response) => {
                callback(response.data)
            })
    }

    getDataFromDom() {
        const html = cheerio.load(this.html)
        console.log(html('wants-content'));
    }
}

module.exports = ParserV3;