const { JSDOM } = require('jsdom');

class ParserV2 {
    constructor(link, selectors) {
        this.selectors = selectors;

        this.createDomFromURL(link, (dom) => {
            this.dom = dom
            console.log(this.dom.window);
        })
    }

    async createDomFromURL(link, callback) {
        const dom = await JSDOM.fromURL(link);
        callback(dom)
    }

    getDataFromDom() {}
}

module.exports = ParserV2